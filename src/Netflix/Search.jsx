import FeatherIcon from 'feather-icons-react';
const Search = () => {
    return (
      <div className="search">
          <input type="text" name="" id=""  placeholder="Email address"/>
          <div className="btn">
          <a href="">Get Started <FeatherIcon icon="chevron-right" className="arrow"/> </a>
          </div>
      </div>
    );
  }
  
  export default Search;
  