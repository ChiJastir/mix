import React, {useState} from 'react';
import classes from './buttonSearch.module.scss'
import {ReactComponent as SearchIco} from '../../assets/search.svg'
import MobilePanel from "../mobilePanel/mobilePanel";
import Search from "../../components/searchAndFilters/search";

const MobileSearch = ({className}) => {
    const [visible, setVisible] = useState(false)

    return (
        <div>
            <button onClick={() => setVisible(true)} className={[classes.button, className].join(' ')}>
                <SearchIco/>
            </button>
            <MobilePanel visible={visible} setVisible={setVisible} isHorizontal={true}>
                <Search
                    className={classes.filtersMenu}
                    setVisible={setVisible}
                />
                <br/>
            </MobilePanel>
        </div>
    );
};

export default MobileSearch;