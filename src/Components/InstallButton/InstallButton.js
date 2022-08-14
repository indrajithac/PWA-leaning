import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';

function InstallButton() {

    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);

    useEffect(() => {
        const handler = e => {
            e.preventDefault();
            console.log("we are being triggered :D");
            setSupportsPWA(true);
            setPromptInstall(e);
        };
        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("transitionend", handler);
    }, []);

    const onClick = evt => {
        evt.preventDefault();
        if (!promptInstall) {
            return;
        }
        promptInstall.prompt();
    };
    if (!supportsPWA) {
        console.log("pwa not supported");
        return null;
    }


    return (
        <Button variant="secondary" size="sm" className='m-2' id='installApp' onClick={onClick}>install</Button>

    )
}

export default InstallButton