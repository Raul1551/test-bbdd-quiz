test('name', () => {
    // array
    expect(Array.isArray(['value'])).toBe(true);
    // string
    expect(typeof 'value').toBe('string');
    // object
    expect({value: 'value'}).toBeTruthy();
    expect(typeof {value: 'value'}).toBe('object');
  })