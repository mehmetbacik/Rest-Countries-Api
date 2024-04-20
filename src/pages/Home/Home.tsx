import React, { useState, useEffect } from "react";
import { getAllCountries } from "../../services/api";
import { Header } from "../../components/Header";
import { CountryList } from "../../components/CountryList";
import { RegionFilter } from "../../components/RegionFilter";
import { Search } from "../../components/Search";
import { Country } from "../../types/country";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const PAGE_SIZE = 12;

const Home: React.FC = () => {
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [regionFilter, setRegionFilter] = React.useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countriesData = await getAllCountries();
        setFilteredCountries(countriesData);
        setAllCountries(countriesData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countriesData = await getAllCountries();
        setCountries(countriesData);
        setFilteredCountries(countriesData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchQuery, countries]);

  useEffect(() => {
    if (regionFilter === "") {
      setFilteredCountries(allCountries);
    } else {
      const filtered = allCountries.filter(
        (country) => country.region === regionFilter
      );
      setFilteredCountries(filtered);
    }
  }, [regionFilter, allCountries]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(0);
  };

  const handleRegionChange = (region: string) => {
    setRegionFilter(region);
    setCurrentPage(0);
  };

  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const offset = currentPage * PAGE_SIZE;
  const pageCount = Math.ceil(filteredCountries.length / PAGE_SIZE);

  return (
    <div className="themeHome">
      <Header />
      <main className="themeMain min-h-screen">
        <div className="themeFilter flex flex-col md:flex-row gap-6 md:gap-0 justify-between px-12 py-10 items-center">
          <Search onSearch={handleSearch} />
          <RegionFilter
            countries={allCountries}
            onRegionChange={handleRegionChange}
          />
        </div>
        <div className="themeList px-12 pb-12">
          <CountryList
            countries={filteredCountries.slice(offset, offset + PAGE_SIZE)}
          />
          <ReactPaginate
            previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
            nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
            breakLabel={"..."}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination flex justify-center mt-12"}
            pageClassName={"mx-2 cursor-pointer"}
            pageLinkClassName={
              "px-3 py-2"
            }
            activeClassName={"active"}
            breakClassName={"mx-2"}
            previousClassName={'pagination-button'}
            nextClassName={'pagination-button'}
            disabledClassName={"opacity-50 cursor-not-allowed"}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
