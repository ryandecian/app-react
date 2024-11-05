interface MyTitleProps {
  name: string;
  age: number;
  firstName?: string;
}

function MyTitle(props: MyTitleProps) {
  const {name, age, firstName} = props
    return <h1>Hello {name} {firstName} tu as {age} ans</h1>;
  }
  
  export default MyTitle;