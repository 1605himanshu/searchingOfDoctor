// app/search/page.js
import { Suspense } from 'react';
import SearchComponent from './SearchComponent';


export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchComponent />
    </Suspense>
  );
}
