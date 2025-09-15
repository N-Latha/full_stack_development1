function welcome(){
    return <h1>Welcome {prop.name}!</h1>
}
function temp(){
    return(
        <div>
            <welcome name="Latha"/>
            <welcome name="sabitha"/>
           
        </div>
    );
}temp();