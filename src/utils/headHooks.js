import { useEffect } from 'react';

const ImportScript = scriptPath => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = scriptPath;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [scriptPath]);
};

export default ImportScript;
