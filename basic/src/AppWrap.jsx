export default function AppWrap(){
    return(
        <div>
            <Navbar>
                <Avator
                    image = 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
                    name = 'Bob'
                    size = {200}
                />
                <p>gdgd</p>
            </Navbar>
            <Navbar>
                <p>권용휘</p>
            </Navbar>
        </div>
    )
}
function Navbar({children}){
    return(
        <header style ={{backgroundColor:'yellow'}}>
            {children}
        </header>
    )
}
function Avator(props){
    return(
        <div>
            <img src={props.image} alt={props.name} width={props.size} height={props.size} style={{borderRadius:'50%'}}/>
        </div>
    )
}