import {getIdFromCharacterUrl, interpolate} from '../string';

describe('String utils function(interpolate)', () => {
  test('it should build url based on passed object value', () => {
    const endpoint = '/hello/:id';

    const finalUrl = interpolate(endpoint, {id: 1});

    expect(finalUrl).toEqual('/hello/1');
  });
});

describe('String utils function(getIdFromCharacterUrl)', () => {
  test('it should get Id from given characterUrl', () => {
    const endpoint = 'https://swapi.dev/api/people/1/';

    const id = getIdFromCharacterUrl(endpoint);

    expect(id).toEqual('1');
  });
});
