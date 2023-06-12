const users = [
  {
    id: 0,
    name: "John Doe",
    email: "john_doe@gmail.com",
    age: 25,
    birthday: "1995-01-01",
    role: "Admin",
    created_at: "2021-01-01",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut semper libero. Nulla facilisi. Donec euismod, nisl eget fermentum ultricies, ipsum risus aliquet odio, eget ultricies diam nisl quis urna. Nulla facilisi. Donec euismod, nisl eget fermentum ultricies, ipsum risus aliquet odio, eget ultricies diam nisl quis urna.",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 1,
    name: "Jane Doe",
    email: "jane_doe@gmail.com",
    age: 21,
    birthday: "1999-01-01",
    role: "User",
    created_at: "2021-01-01",
    about:
      "Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Ut eu sem integer vitae. Enim nulla aliquet porttitor lacus luctus accumsan. Amet consectetur adipiscing elit pellentesque. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Viverra nam libero justo laoreet. Elit eget gravida cum sociis natoque. Accumsan tortor posuere ac ut consequat semper viverra. Nec ultrices dui sapien eget. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Vitae tempus quam pellentesque nec. Nisi porta lorem mollis aliquam ut porttitor leo a. Malesuada pellentesque elit eget gravida cum sociis. Tellus in metus vulputate eu scelerisque felis. Nulla facilisi nullam vehicula ipsum a arcu. Egestas purus viverra accumsan in nisl nisi.",
    photo:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Sara Miller",
    email: "sara_miller@gmail.com",
    age: 23,
    birthday: "1997-01-01",
    role: "User",
    created_at: "2021-01-01",
    about:
      "Enim neque volutpat ac tincidunt vitae semper quis lectus. Ac odio tempor orci dapibus ultrices in iaculis nunc. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Purus faucibus ornare suspendisse sed. Non arcu risus quis varius quam quisque. Feugiat in fermentum posuere urna nec. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Varius duis at consectetur lorem donec. Quisque id diam vel quam elementum pulvinar. Et pharetra pharetra massa massa ultricies mi. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Nunc lobortis mattis aliquam faucibus purus in massa. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Nisi porta lorem mollis aliquam. A iaculis at erat pellentesque adipiscing commodo elit. Ullamcorper sit amet risus nullam. A lacus vestibulum sed arcu non.",
    photo:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Tom Smith",
    email: "tom_smith@gmail.com",
    age: 31,
    birthday: "1989-01-01",
    role: "User",
    created_at: "2021-01-01",
    about:
      "Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Integer vitae justo eget magna fermentum iaculis eu non. Odio ut enim blandit volutpat maecenas volutpat. Tellus in metus vulputate eu scelerisque felis. Faucibus in ornare quam viverra. Gravida quis blandit turpis cursus in. Nisl purus in mollis nunc sed id semper risus. Ornare quam viverra orci sagittis eu volutpat. Facilisis magna etiam tempor orci eu lobortis. Eu ultrices vitae auctor eu augue ut lectus arcu. Odio eu feugiat pretium nibh. Tempus egestas sed sed risus pretium quam. Ac ut consequat semper viverra nam libero justo laoreet sit. Id diam maecenas ultricies mi. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Hac habitasse platea dictumst quisque. Amet nisl suscipit adipiscing bibendum est.",
    photo:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Frank Jones",
    email: "frank_jones@gmail.com",
    age: 29,
    birthday: "1991-01-01",
    role: "User",
    created_at: "2021-01-01",
    about:
      "Massa enim nec dui nunc mattis enim. Sed odio morbi quis commodo odio. Commodo odio aenean sed adipiscing. Mauris augue neque gravida in. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Sit amet aliquam id diam maecenas ultricies. Euismod elementum nisi quis eleifend. Risus at ultrices mi tempus imperdiet nulla malesuada. Molestie ac feugiat sed lectus. Mi ipsum faucibus vitae aliquet nec. Dui faucibus in ornare quam viverra orci sagittis eu. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Tortor posuere ac ut consequat semper viverra nam libero justo. Tincidunt arcu non sodales neque sodales ut etiam. Massa vitae tortor condimentum lacinia quis vel eros donec. Viverra mauris in aliquam sem. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam.",
    photo:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

type RequestParams = {
  params: { userId: string };
};

export async function GET(request: Request, params: RequestParams) {
  const { userId } = params.params;
  const user = users.find((user) => user.id === parseInt(userId));
  if (user) {
    return {
      status: 200,
      body: user,
    };
  } else {
    return {
      status: 404,
      body: { message: "User not found" },
    };
  }
}
