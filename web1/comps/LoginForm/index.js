//login form
import { Button, Loader, Input } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function LoginForm({
    loginState = "before",
    onLoginClick = () => { }
}) {
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

    return <div>
        <h3>login form</h3>
        <Input
            disabled={loginState !== "before"}
            placeholder="email"
        />
        <Input
            disabled={loginState !== "before"}
            placeholder="password" />
        <hr />
        <Button color={c}
            onClick={() => onLoginClick()}>
            {btn_txt}
            {loginState === "during" && <Loader active />}
        </Button>
    </div>
}
