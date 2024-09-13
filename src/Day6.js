import { useEffect, useState } from "react";

function BasicForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sent name: ${name} `);
  };
  return (
    <div>
      <p>BasicForm</p>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          placeholder="Please enter your name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

const MultipleInputForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    surName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sent info ${JSON.stringify(formData)}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={formData.firstName}
          name="firstName"
          placeholder="Name"
          onChange={handleChange}
        ></input>
        <input
          value={formData.surName}
          name="surName"
          placeholder="Surname"
          onChange={handleChange}
        ></input>
        <input
          value={formData.email}
          name="email"
          placeholder="email"
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

function SelectAndRadio() {
  const [selectedFriut, setSelectedFriut] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedFriut}
          onChange={(e) => setSelectedFriut(e.target.value)}
        >
          <option value=""> Choose the fruits </option>
          <option value="Apple"> Apple </option>
          <option value="Banana"> Banana </option>
          <option value="Orange"> Orange </option>
        </select>
        {selectedFriut && <h4>{selectedFriut}</h4>}
        <div>
          <input
            onChange={(e) => setGender(e.target.value)}
            type="radio"
            id="male"
            name="gender"
            value="male"
          ></input>
          <label>Male</label>
          <input
            onChange={(e) => setGender(e.target.value)}
            type="radio"
            id="female"
            name="gender"
            value="female"
          ></input>
          <label>Female</label>
          <input
            onChange={(e) => setGender(e.target.value)}
            type="radio"
            id="others"
            name="gender"
            value="others"
          ></input>
          <label>Others</label>
        </div>
        {gender && <h4>Your gender is: {gender}</h4>}
        <button type="submit">sent</button>
      </form>
    </div>
  );
}

function ProductSearch() {
  const [sortOrder, setSortOrder] = useState("asc");
  const [priceFilter, setPriceFilter] = useState({ min: "", max: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState (1);
  const itemsPerPage =2;
  const products = [
    { id: 1, name: "Mobile phone", price: 5 },
    { id: 2, name: "Laptop", price: 7 },
    { id: 3, name: "Earsphone", price: 1 },
    { id: 4, name: "Camera", price: 4 },
    { id: 5, name: "Bluetooth speaker", price: 4 },
  ];

  const [results, setResults] = useState([...products]);

  useEffect (() => {
    handleSearch();
  }, [sortOrder, priceFilter, currentPage]);

  const handleSearch = () => {
    let filterProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //filter by price
    if (priceFilter.min !== "") {
      filterProducts = filterProducts.filter(
        (product) => product.price >= parseInt(priceFilter.min)
      );
     
    }
    if (priceFilter.max !== "") {
        filterProducts = filterProducts.filter(
          (product) => product.price <= parseInt(priceFilter.max)
        );
      }

      filterProducts.sort((a,b) => {
        return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
      });
      setResults(filterProducts);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  }

  const handlePriceFilterChange = (e) => {
    const { name, value } = e.target;
    setPriceFilter({...priceFilter, [e.target.name]: e.target.value});
};
    //Seperate page
 const indexOfLastItem = currentPage * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);
 const totalPages = Math.ceil (results.length / itemsPerPage);

    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
          <label></label>
          <button type="submit">search</button>
        </form>
        <div>
            <label>
                Sort by price: <select onChange={handleSortChange}>
                <option value='asc'>Price (Low-High)</option>
                <option value='desc'>Price (High-Low)</option>
                </select>
            </label>
        </div>
        <div>
          <label>
            {" "}
            Lowest price:
            <input
              type="number"
              name="min"
              value={priceFilter.min}
              onChange={handlePriceFilterChange}
            ></input>
          </label>
          <label>
            {" "}
            Highest price:
            <input
              type="number"
              name="max"
              value={priceFilter.max}
              onChange={handlePriceFilterChange}
            ></input>
          </label>
        </div>
        <ul>
          {currentItems.map((product, index) => (
            <li key={products.id}>
              {index + 1}. {product.name}, price: {product.price} LAK
            </li>
          ))}
        </ul>
        <div>
            <button 
            onClick={() => setCurrentPage ((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            > Previous</button>
            <span>
                page {currentPage} from {totalPages}
            </span>
            <button 
            onClick={() => setCurrentPage ((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            > Next</button>
        </div>
      </div>
    );
  };


function Day6() {
  return (
    <div className="container">
      <h1>Day 6 of Hell "Form and Controlled Components in React"</h1>
      <h2>Basic Form</h2>
      <BasicForm></BasicForm>
      <h2>Many input form</h2>
      <MultipleInputForm></MultipleInputForm>
      <h2>Chose Radio and Dropdown</h2>
      <SelectAndRadio></SelectAndRadio>
      <h2> Searching for product</h2>
      <ProductSearch></ProductSearch>
      <style jsx>
        {`
          .container {
            max-width: 800;
            margin: 0 auto;
            padding: 20px;
          }
          form {
            margin-bottom: 20px;
          }
          input,
          select {
            margin: 5px 0;
            padding: 5px;
          }
          button {
            marin-top: 10px;
            padding: 5px 10px;
            background-color: #4caf50;
            color: white;
            border: none;
            cursor: pointer;
          }
          .error {
            color: red;
            font-size: 20px;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            margin: 5px 0;
            padding: 5px;
            background-color: #f0f0f0;
            border-radius: 3px;
          }
        `}
      </style>
    </div>
  );
}
export default Day6;
