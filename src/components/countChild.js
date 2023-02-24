function CountChild(props) {
    return(
            <div className={props.counting.divClass}>
                <img className="count-img" src={props.counting.source} aria-hidden="true" alt={props.counting.name} />
                <div>

                        <h2>{props.counting.head2}</h2>

                    <div>

                        <h3>{props.counting.head3}</h3>
                        <p>{props.counting.para}</p>

                     </div>

                </div>
            </div>
    );
}
export default CountChild;