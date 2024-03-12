// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// const GenreFilter = ({
//   movieList,
//   setFilteredList,
//   genreKeyword,
//   setGenreKeyword,
// }) => {
//   const { genreList } = useSelector((state) => state.movie);

//   useEffect(() => {
//     if (genreKeyword !== "") {
//       let list = movieList?.filter((item) =>
//         item.genre_ids.includes(Number(genreKeyword))
//       );
//       console.log("장르별 리스트", list);
//       setFilteredList(list);
//     } else {
//       setFilteredList(movieList);
//       console.log("영화전체", movieList);
//     }
//   }, [movieList, genreKeyword]);
//   //   console.log(movieList.results[0].genre_ids);
//   console.log("genrekeword", genreKeyword);
//   return (
//     <div>
//       <select
//         onChange={(e) => setGenreKeyword(e.target.value)}
//         value={genreKeyword}
//         className="select-box"
//       >
//         <option value="" selected>
//           장르별 검색
//         </option>
//         {genreList.map((item) => (
//           <option className="select-option" key={item.name} value={item.id}>
//             {item.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default GenreFilter;
