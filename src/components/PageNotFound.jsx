import React from "react";

const PageNotFound = () => {

    const style = {
        text: {
          WebkitTextStroke: "1px #FFF",
        },
    }

    return(
        <div className="h-full w-full flex items-center justify-center border-2">
            <div className="w-5/6 md:w-2/5 text-center">
                <h1 className="text-transparent" style={style.text}>
                    404
                </h1>
                <p className="my-8">
                    Page not found!
                </p>
            </div>
        </div>
    )
}

export default PageNotFound;
