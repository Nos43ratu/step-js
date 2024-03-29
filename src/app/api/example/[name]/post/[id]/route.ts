import { cache } from "@/shared/cahce";

interface Params {
  params: {
    name: string;
    id: string;
  };
}

interface POSTRequest {
  body: {
    title: string;
    content: string;
  };
}
//fix cors errors
export async function DELETE(request: Request, { params }: Params) {
  const { id, name } = params;
  console.log(id, name);

  console.log(cache.get(name));

  if (cache.has(name)) {
    const data = cache.get(name) as {
      name: string;
      posts: [{ title: string; content: string; id: string }];
    };

    const posts = data.posts.filter((post: any) => post.id !== id);

    cache.set(name, {
      name,
      posts,
    });

    console.log(cache.get(name));

    return new Response(JSON.stringify({}), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE",
        "Access-Control-Allow-Headers": "*",
      },
    });
  } else {
    return new Response(JSON.stringify({}), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE",
        "Access-Control-Allow-Headers": "*",
      },
    });
  }
}

export async function PUT(request: Request, { params }: Params) {
  const { id, name } = params;

  if (cache.has(name)) {
    const body = (await request.json()) as POSTRequest["body"];

    const data = cache.get(name) as {
      name: string;
      posts: [{ title: string; content: string; id: string }];
    };

    const posts = data.posts.map((post: any) => {
      if (post.id === id) {
        return {
          ...post,
          ...body,
        };
      } else {
        return post;
      }
    });

    cache.set(name, {
      name,
      posts,
    });

    return new Response(JSON.stringify({}), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "UPDATE",
        "Access-Control-Allow-Headers": "*",
      },
    });
  } else {
    return new Response(JSON.stringify({}), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "UPDATE",
        "Access-Control-Allow-Headers": "*",
      },
    });
  }
}

export async function GET(request: Request, { params }: Params) {
  const { id, name } = params;

  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
  });
}
