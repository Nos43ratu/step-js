import fs from "fs";

type RequestParams = {
  params: { lesson: string; example: string };
};

const css = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: sans-serif;
    }

    html,
    body {
      background-color: #f5f5f5;
    }

    main {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 16px;
      max-width: 600px;
      margin: 0 auto;
    }

    h1 {
      margin-bottom: 32px;
      color: #333;
    }

    .posts {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin-bottom: 32px;
    }

    .post {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: 1px solid black;
      background: ghostwhite;
      border-radius: 4px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
      padding: 16px;
    }

    .post-title {
      margin-bottom: 8px;
      color: #333;
    }

    .post-content {
      margin-bottom: 16px;
      color: #333;
      white-space: pre-wrap;
    }

    .post button {
      width: 100%;
      padding: 8px;
      border: 1px solid black;
      border-radius: 4px;
      background: ghostwhite;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      margin-top: 4px;
    }

    #add-post {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    #add-post input {
      width: 100%;
      padding: 8px;
      border: 1px solid black;
      border-radius: 4px;
      background: ghostwhite;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    }

    #add-post button {
      width: 100%;
      padding: 8px;
      border: 1px solid black;
      border-radius: 4px;
      background: ghostwhite;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }

    #add-post button:hover {
      background: #ffffff;
    }`;

export async function GET(request: Request, params: RequestParams) {
  return new Response(css, {
    status: 200,
    headers: {
      "Content-Type": "text/css",
    },
  });
}
