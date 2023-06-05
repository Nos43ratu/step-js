export default function LessonLayout(props: any) {
  const { children, ...rest } = props;

  console.log(rest);

  return <div>{children}</div>;
}
