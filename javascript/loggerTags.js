function countMissingTags(input) {
  let f = input.replaceAll('<app>', '(');
  f = f.replaceAll('</app>', ')');

  while (f.includes('()')) {
    f = f.replace('()', '');
  }

  return f.length;
}

console.log(countMissingTags("<app></app></app></app>"));
console.log(countMissingTags("<app></app><app></app>"));
console.log(countMissingTags("<app></app><app><app>"));
console.log(countMissingTags("</app><app><app>"));
