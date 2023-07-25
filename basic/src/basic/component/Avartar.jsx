export default function Avartar({url,isNew}){
    return(
        <div className="avartar">
            <img 
            className="photo"   
            src={url}/>
            {isNew && <span className="new">New</span>}
        </div>
    );
}