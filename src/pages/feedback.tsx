import { FormEventHandler, useState } from "react";
import { Seo } from "@/entities/seo";
import { Header } from "@/entities/header";
import { Layout } from "@/shared/ui";
import { Card } from "@/entities/card";

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

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    fetch("/step/api/feedback", {
      method: "POST",
      body: JSON.stringify({ feedback, date: dateStr }),
    });
  };

  return (
    <Layout>
      <Layout.Container>
        <div className="flex flex-col max-w-lg mx-auto w-full px-4">
          <Card className="p-4 flex flex-col space-y-4" hover={false}>
            <div className="flex flex-col space-y-2">
              <h1 className="font-bold text-lg md:text-2xl">
                Анонимная форма обратной связи
              </h1>

              <p className="text-base md:text-lg">
                Поделитесь своими впечатлениями о курсе!
                <br />
                Что понравилось, а что нет?
                <br />
                Что было плохо, а что хорошо?
              </p>
            </div>
            <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
              <textarea
                className="h-32"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />

              <button type="submit" className="text-indigo-500">
                Отправить
              </button>
            </form>
          </Card>
        </div>
      </Layout.Container>
    </Layout>
  );
}

export default FeedbackPage;
