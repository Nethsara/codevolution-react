type GreetProps = {
  name: string;
  numberOfMessages: number;
  isLogged: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>{props.isLogged ? `Hello, ${props.name}!` : "Welcome Guest"}</h2>
    </div>
  );
};
