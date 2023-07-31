export default function AppCard(){
    return(
        <div>
            <Card>
                <p>권용휘</p>
            </Card>
            <Card>
                <h1>과연</h1>
                <p>들어가나</p>
            </Card>
        </div>
    )
}
function Card({children}){
    return(
        <div style={{backgroundColor:'black'
            ,borderRadius:'20px'
            ,color:'white'
            ,minHeight:'200px'
            ,maxWidth:'200px'
            ,margin:'1rem'
            ,padding:'1rem'
            ,textAlign:'center'
        }}>
            {children}
        </div>
    )
}