

export default function Search(props) {
    return (
        <div>
            <form>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search for Employee by Last Name"
                id="search"
                />
            </div>
    </form>
        </div>
    )
}
