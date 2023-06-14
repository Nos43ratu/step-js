import { cache } from "@/shared/cahce";
import { v4 as uuidv4 } from "uuid";

interface Params {
  params: {
    name: string;
  };
}

export async function GET(request: Request, { params }: Params) {
  const name = params.name;

  if (cache.has(name)) {
    console.log("GET has");
    const data = cache.get(name);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "application/json",
      },
    });
  } else {
    console.log("GET no has");
    const data = {
      name,
      posts: [],
    };

    cache.set(name, data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "application/json",
      },
    });
  }
}

interface POSTRequest {
  body: {
    title: string;
    content: string;
  };
}
export async function POST(request: Request, { params }: Params) {
  const name = params.name;

  if (cache.has(name)) {
    const body = (await request.json()) as POSTRequest["body"];
    console.log(body);

    const data = cache.get(name) as {
      name: string;
      posts: [{ title: string; content: string; id: string }];
    };

    data.posts.push({ id: uuidv4(), ...body });

    cache.set(name, data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
      },
    });
  } else {
    const body = (await request.json()) as POSTRequest["body"];

    const data = {
      name,
      posts: [
        {
          id: uuidv4(),
          ...body,
        },
      ],
    };

    cache.set(name, data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
      },
    });
  }
}
