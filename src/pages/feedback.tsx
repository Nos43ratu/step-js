import { useState } from "react";

function FeedbackPage() {
  const [feedback, setFeedback] = useState("");
  //create date in hh:mm dd/mm format
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dateStr = `${hours}:${minutes} ${day}.${month}.${year}`;

  function handleSubmit() {
    fetch("/step/api/feedback", {
      method: "POST",
      body: JSON.stringify({ feedback, date: dateStr }),
    });
  }

  return (
    <div>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default FeedbackPage;
