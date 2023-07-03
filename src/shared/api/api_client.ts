type Feedback = {
  feedback: string;
  date: string;
};

export async function send_feedback(body: Feedback): Promise<boolean> {
  try {
    await fetch("/step/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return true;
  } catch (e) {
    console.log(e);

    return false;
  }
}
