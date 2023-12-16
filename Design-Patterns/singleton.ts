// https://refactoring.guru/design-patterns/singleton/typescript/example#example-0

class SingletonExample {
  private static instance: SingletonExample;

  /**
   * The Singleton's constructor should always be private,to prevent direct instantiation of the object from outside the class.
   */
  private constructor() {}

  /// The static method that controls the access to the singleton instance.
  public static getInstance(): SingletonExample {
    if (!SingletonExample.instance) {
      SingletonExample.instance = new SingletonExample();
    }

    return SingletonExample.instance;
  }

  // Finally,  define some business logic, which can be executed on its instance.
  public connectToDB() {
    console.log('Connecting to the Data Base.... ');
    //connect to DB
  }
}

const singleton1 = SingletonExample.getInstance();
const singleton2 = SingletonExample.getInstance();

console.log(singleton1 === singleton2); // true

singleton1.connectToDB();
singleton2.connectToDB();
