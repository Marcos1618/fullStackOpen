const FilterPersons = ({newFilter, handleNewFilter, showAll, setShowAll}) => {
    return (
        <div>
            <input value={newFilter} onChange={handleNewFilter}></input>
            <button type="submit" onClick={() => setShowAll(!showAll)}>{showAll ? "filter" : "unfilter"}</button>
        </div>
        )
}

export default FilterPersons