import React from "react";

const HeavyComponent = React.lazy(() => import('../OtherHeavyComp/HeavyComponent'))

const App = () => {
    return (
        <React.Fragment>
            <center>
                <h1>
                    Hello World !!
                </h1>
                <React.Suspense fallback={<h2>Loding...</h2>}>
                    <HeavyComponent />
                </React.Suspense>
            </center>
        </React.Fragment>
    );
}

export default App