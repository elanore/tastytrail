const Contact =()=>{
    return(
        <div>
            <h1 className="font bold text-2xl p-4 m-4">Contact us </h1>
            <form>
                <input type="text" placeholder="name" className="border border-red-400 p-2 m-2"/>
                <input type="text" placeholder="message" className="border border-red-400 p-2 m-2"/>
                <button className="border border-red-400 p-2 m-2 bg-red-100">
                    Submit
                </button>
            </form>
            
        </div>
        
    );

};
export default Contact;