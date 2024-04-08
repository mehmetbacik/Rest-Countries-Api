import React, { useState, useEffect } from "react";
import { getAllCountries } from "../../services/api";
import { Header } from "../../components/Header";
import { CountryList } from "../../components/CountryList";
import { RegionFilter } from "../../components/RegionFilter";
import { Search } from "../../components/Search";
import { Country } from "../../types/country";
import ReactPaginate from "react-paginate";

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
      <main className="themeMain">
        <div className="themeFilter flex justify-between px-12 py-10 items-center">
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
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
