type Test<V> = (value: V) => value is NonNullable<V>;

function exists<T>(value?: T | null): value is NonNullable<T> {
  return value !== undefined && value !== null;
}

export default function either<T>(value: T, test: Test<T> = exists) {
  return function orElse<O>(other: O) {
    return test(value) ? value : other;
  };
}