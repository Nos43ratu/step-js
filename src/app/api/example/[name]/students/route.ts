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
    const data = {
      subject: name,
      students: [],
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

    const data = cache.get(name) as {
      name: string;
      students: [{ title: string; content: string; id: string }];
    };

    console.log(data, body);

    data.students.push({ id: uuidv4(), ...body });

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
      subject: [
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
