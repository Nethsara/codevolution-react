type GreetProps = {
  name: string;
  numberOfMessages: number;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      Welcome {props.name}! You have {props.numberOfMessages} unread messages!
    </div>
  );
};
