import { Stack, Card, Text, Flex, Button } from "@sanity/ui";
import { useState } from "react";
import { NavbarProps } from "sanity";

type Props = NavbarProps & {
  projectId: string;
  dataset: string;
  homeUrl?: string;
  revalidateUrl?: string;
};

export default function StudioComponentHeader({
  dataset,
  projectId,
  homeUrl,
  revalidateUrl,
  ...props
}: Props) {
  const {
    handleClick: handleClickRevalidateButton,
    loading: revalidating,
    message: revalidationMessage,
    ok: revalidationOk,
    sent: revalidationSent,
  } = useRevalidateButton(revalidateUrl);

  const revalidateButtonTone =
    revalidationSent && !revalidationOk ? "critical" : "positive";

  const revalidateButtonText =
    revalidationMessage && !revalidationOk
      ? `Revalidate - ${revalidationMessage}`
      : "Revalidate";

  return (
    <Stack>
      <Card
        padding={3}
        tone={dataset === 'production"' ? "positive" : "critical"}
      >
        <Flex gap={4}>
          <Flex gap={3}>
            {homeUrl && (
              <Button
                padding={2}
                onClick={() => window.location.assign(homeUrl)}
              >
                Home
              </Button>
            )}
            {revalidateUrl && (
              <Button
                tone={revalidateButtonTone}
                padding={2}
                disabled={revalidating}
                onClick={handleClickRevalidateButton}
              >
                {revalidateButtonText}
              </Button>
            )}
          </Flex>
          <Flex align="center" gap={3}>
            <Text>projectId={projectId}</Text>
            <Text>dataset={dataset}</Text>
          </Flex>
        </Flex>
      </Card>
      <>{props.renderDefault(props)}</>
    </Stack>
  );
}

function useRevalidateButton(revalidateUrl?: string) {
  const [ok, setOk] = useState(false);
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);

  const post = async () => {
    setLoading(true);
    setSent(true);

    try {
      const newResponse = await fetch(revalidateUrl ?? "", {
        method: "POST",
      });
      const data = await newResponse.json();
      setOk(newResponse.ok);
      const newMessage = data.message;
      setMessage(newMessage);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setOk(false);
      setMessage(JSON.stringify(error));
    }
  };

  const handleClick = async () => {
    await post();
  };

  return { handleClick, loading, message, ok, sent };
}
