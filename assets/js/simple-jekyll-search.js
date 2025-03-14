'use strict';

function FuzzySearchStrategy() {
  this.matches = function (string, crit) {
    if (!string || !crit) return false;
    
    string = string.toLowerCase();
    crit = crit.toLowerCase();
    
    if (string.includes(crit)) {
      return true;
    }
    
    return false;
  };
}

function LiteralSearchStrategy() {
  this.matches = function (str, crit) {
    if (!str || !crit) return false;
    
    str = str.trim().toLowerCase();
    crit = crit.trim().toLowerCase();
    
    return str.includes(crit) && crit.length >= 2;
  };
}

var _$FuzzySearchStrategy_5 = new FuzzySearchStrategy();
var _$LiteralSearchStrategy_6 = new LiteralSearchStrategy();

var _$Repository_4 = {
  put: put,
  clear: clear,
  search: search,
  setOptions: __setOptions_4
};

function NoSort() {
  return 0;
}

const data = [];
let opt = {
  fuzzy: false,
  limit: Infinity, // 결과 개수 제한 해제
  searchStrategy: _$LiteralSearchStrategy_6,
  sort: NoSort,
  exclude: []
};

function put(inputData) {
  if (Array.isArray(inputData)) {
    clear();
    inputData.forEach(item => isObject(item) && data.push(item));
  } else if (isObject(inputData)) {
    data.push(inputData);
  }
}

function clear() {
  data.length = 0;
}

function isObject(obj) {
  return obj && Object.prototype.toString.call(obj) === '[object Object]';
}

function search(crit) {
  if (!crit || crit.length < 2) return [];
  return findMatches(data, crit, opt.searchStrategy, opt).sort(opt.sort);
}

function __setOptions_4(_opt) {
  opt = Object.assign(opt, _opt);
  opt.searchStrategy = opt.fuzzy ? _$FuzzySearchStrategy_5 : _$LiteralSearchStrategy_6;
}

function findMatches(data, crit, strategy, opt) {
  return data.filter(item => findMatchesInObject(item, crit, strategy, opt)); // 결과 개수 제한 제거
}

function findMatchesInObject(obj, crit, strategy, opt) {
  return Object.values(obj).some(value => !isExcluded(value, opt.exclude) && strategy.matches(value, crit));
}

function isExcluded(term, excludedTerms) {
  return excludedTerms.some(excludedTerm => new RegExp(excludedTerm).test(term));
}

var SimpleJekyllSearch = function (options) {
  if (!options.searchInput || !options.resultsContainer || !options.json) {
    throw new Error('SimpleJekyllSearch --- Required options missing');
  }

  opt = Object.assign(opt, options);
  opt.searchStrategy = opt.fuzzy ? _$FuzzySearchStrategy_5 : _$LiteralSearchStrategy_6;
  
  if (Array.isArray(opt.json)) {
    put(opt.json);
  } else {
    fetch(opt.json)
      .then(response => response.json())
      .then(json => put(json))
      .catch(error => console.error('SimpleJekyllSearch --- Failed to load JSON:', error));
  }

  options.searchInput.addEventListener('input', function (e) {
    emptyResultsContainer();
    debounce(() => searchAndRender(e.target.value), opt.debounceTime);
  });
};

function emptyResultsContainer() {
  opt.resultsContainer.innerHTML = '';
}

function appendToResultsContainer(text) {
  opt.resultsContainer.innerHTML += text;
}

function searchAndRender(query) {
  if (!query || query.length < 2) return;
  const results = search(query);
  if (results.length === 0) {
    appendToResultsContainer(opt.noResultsText || 'No results found');
  } else {
    results.forEach(result => appendToResultsContainer(`<li><a href="${result.url}">${result.title}</a></li>`));
  }
}

let debounceTimerHandle;
function debounce(func, delayMillis) {
  if (delayMillis) {
    clearTimeout(debounceTimerHandle);
    debounceTimerHandle = setTimeout(func, delayMillis);
  } else {
    func();
  }
}
