import { useEffect, useState } from "react";
import { Datas } from "../../data/info";
import { Form, InputGroup } from "react-bootstrap";
import { IoSearchOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./MainSection.module.css";
import Card from "../Card/Card";

function MainSection() {
  const allData = Datas;
  const [searchKey, setSearchKey] = useState("");
  const [filteredData, setFilteredData] = useState(allData);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const results = allData.filter(
      (data) =>
        data.title.toLowerCase().includes(searchKey.toLowerCase()) ||
        data.domain.toLowerCase().includes(searchKey.toLowerCase()) ||
        data.category.toLowerCase().includes(searchKey.toLowerCase())
    );
    setFilteredData(results);
  }, [searchKey, allData]);

  const searchInputHandler = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <>
      <div className={styles.searchContainer}>
        <InputGroup className={styles.search}>
          <InputGroup.Text id="basic-addon1">
            <IoSearchOutline size={25} />
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="جستجو"
            onChange={searchInputHandler}
          />
        </InputGroup>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center mt-3">
        {filteredData.map((data, index) => {
          return (
            <div
              key={index}
              className={styles.cardContainer}
              style={
                index % 2
                  ? { backgroundColor: "rgba(44, 185, 179, 0.9)" }
                  : { backgroundColor: "rgba(255, 204, 1, 0.9)" }
              }
              data-aos="zoom-in"
            >
              <Card data={data} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MainSection;
