import { FormEvent, useRef } from "react";
import { Layout } from "@/shared/ui";
import { Card } from "@/entities/card";
import { get_date } from "@/shared/utilities/get_date";
import { send_feedback } from "@/shared/api/api_client";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FeedbackPage() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const { feedback } = Object.fromEntries(data);
    const date = get_date();

    await send_feedback({ feedback: String(feedback), date });

    formRef.current?.reset();
    toast("Спасибо за отзыв!");
  }

  return (
    <Layout>
      <ToastContainer />
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
            <form
              ref={formRef}
              className="flex flex-col space-y-2"
              onSubmit={handleSubmit}
            >
              <textarea name="feedback" className="h-32" />

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
