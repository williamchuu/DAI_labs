import { Button, Loader } from 'semantic-ui-react';
// the router and states are mostly used in the page for data/info state managements
import { useRouter } from 'next/router';
import { useState } from 'react';
import LoginForm from '../comps/LoginForm';

export default function Home() {
  //before, during, after
  const [loginState, setLoginState] = useState("before")
  const r = useRouter();

  var c = "blue";
  var btn_txt = "click";

  if (loginState === "before") {
    c = "blue";
    btn_txt = "login";

  }

  if (loginState === "during") {
    c = "green";
    btn_txt = "logging in";
  }

  if (loginState === "after") {
    c = "grey",
      btn_txt = "yay";
  }

  const HandleButton = () => {
    if (loginState === "before") {
      setLoginState("during");
    }
    if (loginState === "during") {
      setLoginState("after");
    }
    if (loginState === "after") {
      r.push("/dashboard");
    }
  }

  const Login = async () => {
    setLoginState("during");

    //it's gonna take time to talk to an "endpoint" to see if your credentials are legit
    //mock of the time passing -> this code is useless
    await new Promise(resolve => setTimeout(resolve, 2000));

    setLoginState("after");

    //it's going to stall for 1-2 seconds
    //mock of the time passing -> this code is useless
    await new Promise(resolve => setTimeout(resolve, 2000));

    r.push("/dashboard");
  }

  return (
    <div>
      <LoginForm loginState={loginState} 
      onLoginClick={()=>Login()}/>
    </div>
  )
}
