import CardTitle from './CartTitle';
import CardList from './CartList';
import CardTotal from './CartTotal';


function Cart() {
    return (
        <div>
            <CardTitle />
            <CardList />
            <CardTotal />
        </div>
    )
}

export default Cart;