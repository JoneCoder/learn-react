const domContainer = document.querySelector('#root');

const Increment = () => {
    const [count, setCount] = React.useState(0);
    return (
    <div class="text-center m-auto">
        <h1 id="display-1" class="mt-5">{ count }</h1>
        <button type="button" id="btn-1" onClick={ () => setCount(count + 1) } class="btn">Increment +</button>
    </div>
    )
};


ReactDOM.render(<Increment/>, domContainer);

