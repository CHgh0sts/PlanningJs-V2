
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model UserParrams
 * 
 */
export type UserParrams = $Result.DefaultSelection<Prisma.$UserParramsPayload>
/**
 * Model Grade
 * 
 */
export type Grade = $Result.DefaultSelection<Prisma.$GradePayload>
/**
 * Model Droit
 * 
 */
export type Droit = $Result.DefaultSelection<Prisma.$DroitPayload>
/**
 * Model Societe
 * 
 */
export type Societe = $Result.DefaultSelection<Prisma.$SocietePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Events
 * const events = await prisma.event.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Events
   * const events = await prisma.event.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.userParrams`: Exposes CRUD operations for the **UserParrams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserParrams
    * const userParrams = await prisma.userParrams.findMany()
    * ```
    */
  get userParrams(): Prisma.UserParramsDelegate<ExtArgs>;

  /**
   * `prisma.grade`: Exposes CRUD operations for the **Grade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grades
    * const grades = await prisma.grade.findMany()
    * ```
    */
  get grade(): Prisma.GradeDelegate<ExtArgs>;

  /**
   * `prisma.droit`: Exposes CRUD operations for the **Droit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Droits
    * const droits = await prisma.droit.findMany()
    * ```
    */
  get droit(): Prisma.DroitDelegate<ExtArgs>;

  /**
   * `prisma.societe`: Exposes CRUD operations for the **Societe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Societes
    * const societes = await prisma.societe.findMany()
    * ```
    */
  get societe(): Prisma.SocieteDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Event: 'Event',
    UserParrams: 'UserParrams',
    Grade: 'Grade',
    Droit: 'Droit',
    Societe: 'Societe'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    projectDB?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "event" | "userParrams" | "grade" | "droit" | "societe"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      UserParrams: {
        payload: Prisma.$UserParramsPayload<ExtArgs>
        fields: Prisma.UserParramsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserParramsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserParramsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserParramsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserParramsPayload>
          }
          findFirst: {
            args: Prisma.UserParramsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserParramsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserParramsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserParramsPayload>
          }
          findMany: {
            args: Prisma.UserParramsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserParramsPayload>[]
          }
          create: {
            args: Prisma.UserParramsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserParramsPayload>
          }
          createMany: {
            args: Prisma.UserParramsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserParramsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserParramsPayload>
          }
          update: {
            args: Prisma.UserParramsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserParramsPayload>
          }
          deleteMany: {
            args: Prisma.UserParramsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserParramsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserParramsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserParramsPayload>
          }
          aggregate: {
            args: Prisma.UserParramsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserParrams>
          }
          groupBy: {
            args: Prisma.UserParramsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserParramsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserParramsCountArgs<ExtArgs>
            result: $Utils.Optional<UserParramsCountAggregateOutputType> | number
          }
        }
      }
      Grade: {
        payload: Prisma.$GradePayload<ExtArgs>
        fields: Prisma.GradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          findFirst: {
            args: Prisma.GradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          findMany: {
            args: Prisma.GradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>[]
          }
          create: {
            args: Prisma.GradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          createMany: {
            args: Prisma.GradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          update: {
            args: Prisma.GradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          deleteMany: {
            args: Prisma.GradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          aggregate: {
            args: Prisma.GradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrade>
          }
          groupBy: {
            args: Prisma.GradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<GradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.GradeCountArgs<ExtArgs>
            result: $Utils.Optional<GradeCountAggregateOutputType> | number
          }
        }
      }
      Droit: {
        payload: Prisma.$DroitPayload<ExtArgs>
        fields: Prisma.DroitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DroitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DroitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroitPayload>
          }
          findFirst: {
            args: Prisma.DroitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DroitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroitPayload>
          }
          findMany: {
            args: Prisma.DroitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroitPayload>[]
          }
          create: {
            args: Prisma.DroitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroitPayload>
          }
          createMany: {
            args: Prisma.DroitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DroitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroitPayload>
          }
          update: {
            args: Prisma.DroitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroitPayload>
          }
          deleteMany: {
            args: Prisma.DroitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DroitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DroitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroitPayload>
          }
          aggregate: {
            args: Prisma.DroitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDroit>
          }
          groupBy: {
            args: Prisma.DroitGroupByArgs<ExtArgs>
            result: $Utils.Optional<DroitGroupByOutputType>[]
          }
          count: {
            args: Prisma.DroitCountArgs<ExtArgs>
            result: $Utils.Optional<DroitCountAggregateOutputType> | number
          }
        }
      }
      Societe: {
        payload: Prisma.$SocietePayload<ExtArgs>
        fields: Prisma.SocieteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocieteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocietePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocieteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocietePayload>
          }
          findFirst: {
            args: Prisma.SocieteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocietePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocieteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocietePayload>
          }
          findMany: {
            args: Prisma.SocieteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocietePayload>[]
          }
          create: {
            args: Prisma.SocieteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocietePayload>
          }
          createMany: {
            args: Prisma.SocieteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SocieteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocietePayload>
          }
          update: {
            args: Prisma.SocieteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocietePayload>
          }
          deleteMany: {
            args: Prisma.SocieteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocieteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SocieteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocietePayload>
          }
          aggregate: {
            args: Prisma.SocieteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSociete>
          }
          groupBy: {
            args: Prisma.SocieteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocieteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocieteCountArgs<ExtArgs>
            result: $Utils.Optional<SocieteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    title: string | null
    subtitle: string | null
    address: string | null
    link: string | null
    debutAt: Date | null
    finAt: Date | null
    fullDay: boolean | null
    userId: string | null
    typeEvent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    title: string | null
    subtitle: string | null
    address: string | null
    link: string | null
    debutAt: Date | null
    finAt: Date | null
    fullDay: boolean | null
    userId: string | null
    typeEvent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    subtitle: number
    address: number
    link: number
    debutAt: number
    finAt: number
    fullDay: number
    userId: number
    typeEvent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    address?: true
    link?: true
    debutAt?: true
    finAt?: true
    fullDay?: true
    userId?: true
    typeEvent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    address?: true
    link?: true
    debutAt?: true
    finAt?: true
    fullDay?: true
    userId?: true
    typeEvent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    address?: true
    link?: true
    debutAt?: true
    finAt?: true
    fullDay?: true
    userId?: true
    typeEvent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    title: string
    subtitle: string | null
    address: string | null
    link: string | null
    debutAt: Date
    finAt: Date
    fullDay: boolean
    userId: string
    typeEvent: string | null
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subtitle?: boolean
    address?: boolean
    link?: boolean
    debutAt?: boolean
    finAt?: boolean
    fullDay?: boolean
    userId?: boolean
    typeEvent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>


  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    subtitle?: boolean
    address?: boolean
    link?: boolean
    debutAt?: boolean
    finAt?: boolean
    fullDay?: boolean
    userId?: boolean
    typeEvent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      subtitle: string | null
      address: string | null
      link: string | null
      debutAt: Date
      finAt: Date
      fullDay: boolean
      userId: string
      typeEvent: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly title: FieldRef<"Event", 'String'>
    readonly subtitle: FieldRef<"Event", 'String'>
    readonly address: FieldRef<"Event", 'String'>
    readonly link: FieldRef<"Event", 'String'>
    readonly debutAt: FieldRef<"Event", 'DateTime'>
    readonly finAt: FieldRef<"Event", 'DateTime'>
    readonly fullDay: FieldRef<"Event", 'Boolean'>
    readonly userId: FieldRef<"Event", 'String'>
    readonly typeEvent: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
  }


  /**
   * Model UserParrams
   */

  export type AggregateUserParrams = {
    _count: UserParramsCountAggregateOutputType | null
    _avg: UserParramsAvgAggregateOutputType | null
    _sum: UserParramsSumAggregateOutputType | null
    _min: UserParramsMinAggregateOutputType | null
    _max: UserParramsMaxAggregateOutputType | null
  }

  export type UserParramsAvgAggregateOutputType = {
    id: number | null
  }

  export type UserParramsSumAggregateOutputType = {
    id: number | null
  }

  export type UserParramsMinAggregateOutputType = {
    id: number | null
    userId: string | null
    role: string | null
    color: string | null
  }

  export type UserParramsMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    role: string | null
    color: string | null
  }

  export type UserParramsCountAggregateOutputType = {
    id: number
    userId: number
    role: number
    color: number
    _all: number
  }


  export type UserParramsAvgAggregateInputType = {
    id?: true
  }

  export type UserParramsSumAggregateInputType = {
    id?: true
  }

  export type UserParramsMinAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    color?: true
  }

  export type UserParramsMaxAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    color?: true
  }

  export type UserParramsCountAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    color?: true
    _all?: true
  }

  export type UserParramsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserParrams to aggregate.
     */
    where?: UserParramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserParrams to fetch.
     */
    orderBy?: UserParramsOrderByWithRelationInput | UserParramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserParramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserParrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserParrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserParrams
    **/
    _count?: true | UserParramsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserParramsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserParramsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserParramsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserParramsMaxAggregateInputType
  }

  export type GetUserParramsAggregateType<T extends UserParramsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserParrams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserParrams[P]>
      : GetScalarType<T[P], AggregateUserParrams[P]>
  }




  export type UserParramsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserParramsWhereInput
    orderBy?: UserParramsOrderByWithAggregationInput | UserParramsOrderByWithAggregationInput[]
    by: UserParramsScalarFieldEnum[] | UserParramsScalarFieldEnum
    having?: UserParramsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserParramsCountAggregateInputType | true
    _avg?: UserParramsAvgAggregateInputType
    _sum?: UserParramsSumAggregateInputType
    _min?: UserParramsMinAggregateInputType
    _max?: UserParramsMaxAggregateInputType
  }

  export type UserParramsGroupByOutputType = {
    id: number
    userId: string
    role: string
    color: string
    _count: UserParramsCountAggregateOutputType | null
    _avg: UserParramsAvgAggregateOutputType | null
    _sum: UserParramsSumAggregateOutputType | null
    _min: UserParramsMinAggregateOutputType | null
    _max: UserParramsMaxAggregateOutputType | null
  }

  type GetUserParramsGroupByPayload<T extends UserParramsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserParramsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserParramsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserParramsGroupByOutputType[P]>
            : GetScalarType<T[P], UserParramsGroupByOutputType[P]>
        }
      >
    >


  export type UserParramsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    color?: boolean
  }, ExtArgs["result"]["userParrams"]>


  export type UserParramsSelectScalar = {
    id?: boolean
    userId?: boolean
    role?: boolean
    color?: boolean
  }


  export type $UserParramsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserParrams"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      role: string
      color: string
    }, ExtArgs["result"]["userParrams"]>
    composites: {}
  }

  type UserParramsGetPayload<S extends boolean | null | undefined | UserParramsDefaultArgs> = $Result.GetResult<Prisma.$UserParramsPayload, S>

  type UserParramsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserParramsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserParramsCountAggregateInputType | true
    }

  export interface UserParramsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserParrams'], meta: { name: 'UserParrams' } }
    /**
     * Find zero or one UserParrams that matches the filter.
     * @param {UserParramsFindUniqueArgs} args - Arguments to find a UserParrams
     * @example
     * // Get one UserParrams
     * const userParrams = await prisma.userParrams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserParramsFindUniqueArgs>(args: SelectSubset<T, UserParramsFindUniqueArgs<ExtArgs>>): Prisma__UserParramsClient<$Result.GetResult<Prisma.$UserParramsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserParrams that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserParramsFindUniqueOrThrowArgs} args - Arguments to find a UserParrams
     * @example
     * // Get one UserParrams
     * const userParrams = await prisma.userParrams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserParramsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserParramsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserParramsClient<$Result.GetResult<Prisma.$UserParramsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserParrams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserParramsFindFirstArgs} args - Arguments to find a UserParrams
     * @example
     * // Get one UserParrams
     * const userParrams = await prisma.userParrams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserParramsFindFirstArgs>(args?: SelectSubset<T, UserParramsFindFirstArgs<ExtArgs>>): Prisma__UserParramsClient<$Result.GetResult<Prisma.$UserParramsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserParrams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserParramsFindFirstOrThrowArgs} args - Arguments to find a UserParrams
     * @example
     * // Get one UserParrams
     * const userParrams = await prisma.userParrams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserParramsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserParramsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserParramsClient<$Result.GetResult<Prisma.$UserParramsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserParrams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserParramsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserParrams
     * const userParrams = await prisma.userParrams.findMany()
     * 
     * // Get first 10 UserParrams
     * const userParrams = await prisma.userParrams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userParramsWithIdOnly = await prisma.userParrams.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserParramsFindManyArgs>(args?: SelectSubset<T, UserParramsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserParramsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserParrams.
     * @param {UserParramsCreateArgs} args - Arguments to create a UserParrams.
     * @example
     * // Create one UserParrams
     * const UserParrams = await prisma.userParrams.create({
     *   data: {
     *     // ... data to create a UserParrams
     *   }
     * })
     * 
     */
    create<T extends UserParramsCreateArgs>(args: SelectSubset<T, UserParramsCreateArgs<ExtArgs>>): Prisma__UserParramsClient<$Result.GetResult<Prisma.$UserParramsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserParrams.
     * @param {UserParramsCreateManyArgs} args - Arguments to create many UserParrams.
     * @example
     * // Create many UserParrams
     * const userParrams = await prisma.userParrams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserParramsCreateManyArgs>(args?: SelectSubset<T, UserParramsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserParrams.
     * @param {UserParramsDeleteArgs} args - Arguments to delete one UserParrams.
     * @example
     * // Delete one UserParrams
     * const UserParrams = await prisma.userParrams.delete({
     *   where: {
     *     // ... filter to delete one UserParrams
     *   }
     * })
     * 
     */
    delete<T extends UserParramsDeleteArgs>(args: SelectSubset<T, UserParramsDeleteArgs<ExtArgs>>): Prisma__UserParramsClient<$Result.GetResult<Prisma.$UserParramsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserParrams.
     * @param {UserParramsUpdateArgs} args - Arguments to update one UserParrams.
     * @example
     * // Update one UserParrams
     * const userParrams = await prisma.userParrams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserParramsUpdateArgs>(args: SelectSubset<T, UserParramsUpdateArgs<ExtArgs>>): Prisma__UserParramsClient<$Result.GetResult<Prisma.$UserParramsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserParrams.
     * @param {UserParramsDeleteManyArgs} args - Arguments to filter UserParrams to delete.
     * @example
     * // Delete a few UserParrams
     * const { count } = await prisma.userParrams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserParramsDeleteManyArgs>(args?: SelectSubset<T, UserParramsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserParrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserParramsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserParrams
     * const userParrams = await prisma.userParrams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserParramsUpdateManyArgs>(args: SelectSubset<T, UserParramsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserParrams.
     * @param {UserParramsUpsertArgs} args - Arguments to update or create a UserParrams.
     * @example
     * // Update or create a UserParrams
     * const userParrams = await prisma.userParrams.upsert({
     *   create: {
     *     // ... data to create a UserParrams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserParrams we want to update
     *   }
     * })
     */
    upsert<T extends UserParramsUpsertArgs>(args: SelectSubset<T, UserParramsUpsertArgs<ExtArgs>>): Prisma__UserParramsClient<$Result.GetResult<Prisma.$UserParramsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserParrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserParramsCountArgs} args - Arguments to filter UserParrams to count.
     * @example
     * // Count the number of UserParrams
     * const count = await prisma.userParrams.count({
     *   where: {
     *     // ... the filter for the UserParrams we want to count
     *   }
     * })
    **/
    count<T extends UserParramsCountArgs>(
      args?: Subset<T, UserParramsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserParramsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserParrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserParramsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserParramsAggregateArgs>(args: Subset<T, UserParramsAggregateArgs>): Prisma.PrismaPromise<GetUserParramsAggregateType<T>>

    /**
     * Group by UserParrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserParramsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserParramsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserParramsGroupByArgs['orderBy'] }
        : { orderBy?: UserParramsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserParramsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserParramsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserParrams model
   */
  readonly fields: UserParramsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserParrams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserParramsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserParrams model
   */ 
  interface UserParramsFieldRefs {
    readonly id: FieldRef<"UserParrams", 'Int'>
    readonly userId: FieldRef<"UserParrams", 'String'>
    readonly role: FieldRef<"UserParrams", 'String'>
    readonly color: FieldRef<"UserParrams", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserParrams findUnique
   */
  export type UserParramsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserParrams
     */
    select?: UserParramsSelect<ExtArgs> | null
    /**
     * Filter, which UserParrams to fetch.
     */
    where: UserParramsWhereUniqueInput
  }

  /**
   * UserParrams findUniqueOrThrow
   */
  export type UserParramsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserParrams
     */
    select?: UserParramsSelect<ExtArgs> | null
    /**
     * Filter, which UserParrams to fetch.
     */
    where: UserParramsWhereUniqueInput
  }

  /**
   * UserParrams findFirst
   */
  export type UserParramsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserParrams
     */
    select?: UserParramsSelect<ExtArgs> | null
    /**
     * Filter, which UserParrams to fetch.
     */
    where?: UserParramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserParrams to fetch.
     */
    orderBy?: UserParramsOrderByWithRelationInput | UserParramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserParrams.
     */
    cursor?: UserParramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserParrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserParrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserParrams.
     */
    distinct?: UserParramsScalarFieldEnum | UserParramsScalarFieldEnum[]
  }

  /**
   * UserParrams findFirstOrThrow
   */
  export type UserParramsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserParrams
     */
    select?: UserParramsSelect<ExtArgs> | null
    /**
     * Filter, which UserParrams to fetch.
     */
    where?: UserParramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserParrams to fetch.
     */
    orderBy?: UserParramsOrderByWithRelationInput | UserParramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserParrams.
     */
    cursor?: UserParramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserParrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserParrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserParrams.
     */
    distinct?: UserParramsScalarFieldEnum | UserParramsScalarFieldEnum[]
  }

  /**
   * UserParrams findMany
   */
  export type UserParramsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserParrams
     */
    select?: UserParramsSelect<ExtArgs> | null
    /**
     * Filter, which UserParrams to fetch.
     */
    where?: UserParramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserParrams to fetch.
     */
    orderBy?: UserParramsOrderByWithRelationInput | UserParramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserParrams.
     */
    cursor?: UserParramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserParrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserParrams.
     */
    skip?: number
    distinct?: UserParramsScalarFieldEnum | UserParramsScalarFieldEnum[]
  }

  /**
   * UserParrams create
   */
  export type UserParramsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserParrams
     */
    select?: UserParramsSelect<ExtArgs> | null
    /**
     * The data needed to create a UserParrams.
     */
    data: XOR<UserParramsCreateInput, UserParramsUncheckedCreateInput>
  }

  /**
   * UserParrams createMany
   */
  export type UserParramsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserParrams.
     */
    data: UserParramsCreateManyInput | UserParramsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserParrams update
   */
  export type UserParramsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserParrams
     */
    select?: UserParramsSelect<ExtArgs> | null
    /**
     * The data needed to update a UserParrams.
     */
    data: XOR<UserParramsUpdateInput, UserParramsUncheckedUpdateInput>
    /**
     * Choose, which UserParrams to update.
     */
    where: UserParramsWhereUniqueInput
  }

  /**
   * UserParrams updateMany
   */
  export type UserParramsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserParrams.
     */
    data: XOR<UserParramsUpdateManyMutationInput, UserParramsUncheckedUpdateManyInput>
    /**
     * Filter which UserParrams to update
     */
    where?: UserParramsWhereInput
  }

  /**
   * UserParrams upsert
   */
  export type UserParramsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserParrams
     */
    select?: UserParramsSelect<ExtArgs> | null
    /**
     * The filter to search for the UserParrams to update in case it exists.
     */
    where: UserParramsWhereUniqueInput
    /**
     * In case the UserParrams found by the `where` argument doesn't exist, create a new UserParrams with this data.
     */
    create: XOR<UserParramsCreateInput, UserParramsUncheckedCreateInput>
    /**
     * In case the UserParrams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserParramsUpdateInput, UserParramsUncheckedUpdateInput>
  }

  /**
   * UserParrams delete
   */
  export type UserParramsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserParrams
     */
    select?: UserParramsSelect<ExtArgs> | null
    /**
     * Filter which UserParrams to delete.
     */
    where: UserParramsWhereUniqueInput
  }

  /**
   * UserParrams deleteMany
   */
  export type UserParramsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserParrams to delete
     */
    where?: UserParramsWhereInput
  }

  /**
   * UserParrams without action
   */
  export type UserParramsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserParrams
     */
    select?: UserParramsSelect<ExtArgs> | null
  }


  /**
   * Model Grade
   */

  export type AggregateGrade = {
    _count: GradeCountAggregateOutputType | null
    _avg: GradeAvgAggregateOutputType | null
    _sum: GradeSumAggregateOutputType | null
    _min: GradeMinAggregateOutputType | null
    _max: GradeMaxAggregateOutputType | null
  }

  export type GradeAvgAggregateOutputType = {
    id: number | null
  }

  export type GradeSumAggregateOutputType = {
    id: number | null
  }

  export type GradeMinAggregateOutputType = {
    id: number | null
    name: string | null
    listDroit: string | null
    societeId: string | null
  }

  export type GradeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    listDroit: string | null
    societeId: string | null
  }

  export type GradeCountAggregateOutputType = {
    id: number
    name: number
    listDroit: number
    societeId: number
    _all: number
  }


  export type GradeAvgAggregateInputType = {
    id?: true
  }

  export type GradeSumAggregateInputType = {
    id?: true
  }

  export type GradeMinAggregateInputType = {
    id?: true
    name?: true
    listDroit?: true
    societeId?: true
  }

  export type GradeMaxAggregateInputType = {
    id?: true
    name?: true
    listDroit?: true
    societeId?: true
  }

  export type GradeCountAggregateInputType = {
    id?: true
    name?: true
    listDroit?: true
    societeId?: true
    _all?: true
  }

  export type GradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grade to aggregate.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Grades
    **/
    _count?: true | GradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GradeMaxAggregateInputType
  }

  export type GetGradeAggregateType<T extends GradeAggregateArgs> = {
        [P in keyof T & keyof AggregateGrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrade[P]>
      : GetScalarType<T[P], AggregateGrade[P]>
  }




  export type GradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradeWhereInput
    orderBy?: GradeOrderByWithAggregationInput | GradeOrderByWithAggregationInput[]
    by: GradeScalarFieldEnum[] | GradeScalarFieldEnum
    having?: GradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GradeCountAggregateInputType | true
    _avg?: GradeAvgAggregateInputType
    _sum?: GradeSumAggregateInputType
    _min?: GradeMinAggregateInputType
    _max?: GradeMaxAggregateInputType
  }

  export type GradeGroupByOutputType = {
    id: number
    name: string
    listDroit: string | null
    societeId: string
    _count: GradeCountAggregateOutputType | null
    _avg: GradeAvgAggregateOutputType | null
    _sum: GradeSumAggregateOutputType | null
    _min: GradeMinAggregateOutputType | null
    _max: GradeMaxAggregateOutputType | null
  }

  type GetGradeGroupByPayload<T extends GradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GradeGroupByOutputType[P]>
            : GetScalarType<T[P], GradeGroupByOutputType[P]>
        }
      >
    >


  export type GradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    listDroit?: boolean
    societeId?: boolean
  }, ExtArgs["result"]["grade"]>


  export type GradeSelectScalar = {
    id?: boolean
    name?: boolean
    listDroit?: boolean
    societeId?: boolean
  }


  export type $GradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Grade"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      listDroit: string | null
      societeId: string
    }, ExtArgs["result"]["grade"]>
    composites: {}
  }

  type GradeGetPayload<S extends boolean | null | undefined | GradeDefaultArgs> = $Result.GetResult<Prisma.$GradePayload, S>

  type GradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GradeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GradeCountAggregateInputType | true
    }

  export interface GradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Grade'], meta: { name: 'Grade' } }
    /**
     * Find zero or one Grade that matches the filter.
     * @param {GradeFindUniqueArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GradeFindUniqueArgs>(args: SelectSubset<T, GradeFindUniqueArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Grade that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GradeFindUniqueOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GradeFindUniqueOrThrowArgs>(args: SelectSubset<T, GradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Grade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindFirstArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GradeFindFirstArgs>(args?: SelectSubset<T, GradeFindFirstArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Grade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindFirstOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GradeFindFirstOrThrowArgs>(args?: SelectSubset<T, GradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Grades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grades
     * const grades = await prisma.grade.findMany()
     * 
     * // Get first 10 Grades
     * const grades = await prisma.grade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gradeWithIdOnly = await prisma.grade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GradeFindManyArgs>(args?: SelectSubset<T, GradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Grade.
     * @param {GradeCreateArgs} args - Arguments to create a Grade.
     * @example
     * // Create one Grade
     * const Grade = await prisma.grade.create({
     *   data: {
     *     // ... data to create a Grade
     *   }
     * })
     * 
     */
    create<T extends GradeCreateArgs>(args: SelectSubset<T, GradeCreateArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Grades.
     * @param {GradeCreateManyArgs} args - Arguments to create many Grades.
     * @example
     * // Create many Grades
     * const grade = await prisma.grade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GradeCreateManyArgs>(args?: SelectSubset<T, GradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Grade.
     * @param {GradeDeleteArgs} args - Arguments to delete one Grade.
     * @example
     * // Delete one Grade
     * const Grade = await prisma.grade.delete({
     *   where: {
     *     // ... filter to delete one Grade
     *   }
     * })
     * 
     */
    delete<T extends GradeDeleteArgs>(args: SelectSubset<T, GradeDeleteArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Grade.
     * @param {GradeUpdateArgs} args - Arguments to update one Grade.
     * @example
     * // Update one Grade
     * const grade = await prisma.grade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GradeUpdateArgs>(args: SelectSubset<T, GradeUpdateArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Grades.
     * @param {GradeDeleteManyArgs} args - Arguments to filter Grades to delete.
     * @example
     * // Delete a few Grades
     * const { count } = await prisma.grade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GradeDeleteManyArgs>(args?: SelectSubset<T, GradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grades
     * const grade = await prisma.grade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GradeUpdateManyArgs>(args: SelectSubset<T, GradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Grade.
     * @param {GradeUpsertArgs} args - Arguments to update or create a Grade.
     * @example
     * // Update or create a Grade
     * const grade = await prisma.grade.upsert({
     *   create: {
     *     // ... data to create a Grade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grade we want to update
     *   }
     * })
     */
    upsert<T extends GradeUpsertArgs>(args: SelectSubset<T, GradeUpsertArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeCountArgs} args - Arguments to filter Grades to count.
     * @example
     * // Count the number of Grades
     * const count = await prisma.grade.count({
     *   where: {
     *     // ... the filter for the Grades we want to count
     *   }
     * })
    **/
    count<T extends GradeCountArgs>(
      args?: Subset<T, GradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GradeAggregateArgs>(args: Subset<T, GradeAggregateArgs>): Prisma.PrismaPromise<GetGradeAggregateType<T>>

    /**
     * Group by Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GradeGroupByArgs['orderBy'] }
        : { orderBy?: GradeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Grade model
   */
  readonly fields: GradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Grade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Grade model
   */ 
  interface GradeFieldRefs {
    readonly id: FieldRef<"Grade", 'Int'>
    readonly name: FieldRef<"Grade", 'String'>
    readonly listDroit: FieldRef<"Grade", 'String'>
    readonly societeId: FieldRef<"Grade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Grade findUnique
   */
  export type GradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade findUniqueOrThrow
   */
  export type GradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade findFirst
   */
  export type GradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grades.
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Grade findFirstOrThrow
   */
  export type GradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grades.
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Grade findMany
   */
  export type GradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Filter, which Grades to fetch.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Grades.
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Grade create
   */
  export type GradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * The data needed to create a Grade.
     */
    data: XOR<GradeCreateInput, GradeUncheckedCreateInput>
  }

  /**
   * Grade createMany
   */
  export type GradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Grades.
     */
    data: GradeCreateManyInput | GradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Grade update
   */
  export type GradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * The data needed to update a Grade.
     */
    data: XOR<GradeUpdateInput, GradeUncheckedUpdateInput>
    /**
     * Choose, which Grade to update.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade updateMany
   */
  export type GradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Grades.
     */
    data: XOR<GradeUpdateManyMutationInput, GradeUncheckedUpdateManyInput>
    /**
     * Filter which Grades to update
     */
    where?: GradeWhereInput
  }

  /**
   * Grade upsert
   */
  export type GradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * The filter to search for the Grade to update in case it exists.
     */
    where: GradeWhereUniqueInput
    /**
     * In case the Grade found by the `where` argument doesn't exist, create a new Grade with this data.
     */
    create: XOR<GradeCreateInput, GradeUncheckedCreateInput>
    /**
     * In case the Grade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GradeUpdateInput, GradeUncheckedUpdateInput>
  }

  /**
   * Grade delete
   */
  export type GradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Filter which Grade to delete.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade deleteMany
   */
  export type GradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grades to delete
     */
    where?: GradeWhereInput
  }

  /**
   * Grade without action
   */
  export type GradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
  }


  /**
   * Model Droit
   */

  export type AggregateDroit = {
    _count: DroitCountAggregateOutputType | null
    _avg: DroitAvgAggregateOutputType | null
    _sum: DroitSumAggregateOutputType | null
    _min: DroitMinAggregateOutputType | null
    _max: DroitMaxAggregateOutputType | null
  }

  export type DroitAvgAggregateOutputType = {
    id: number | null
  }

  export type DroitSumAggregateOutputType = {
    id: number | null
  }

  export type DroitMinAggregateOutputType = {
    id: number | null
    name: string | null
    parent: string | null
  }

  export type DroitMaxAggregateOutputType = {
    id: number | null
    name: string | null
    parent: string | null
  }

  export type DroitCountAggregateOutputType = {
    id: number
    name: number
    parent: number
    _all: number
  }


  export type DroitAvgAggregateInputType = {
    id?: true
  }

  export type DroitSumAggregateInputType = {
    id?: true
  }

  export type DroitMinAggregateInputType = {
    id?: true
    name?: true
    parent?: true
  }

  export type DroitMaxAggregateInputType = {
    id?: true
    name?: true
    parent?: true
  }

  export type DroitCountAggregateInputType = {
    id?: true
    name?: true
    parent?: true
    _all?: true
  }

  export type DroitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Droit to aggregate.
     */
    where?: DroitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Droits to fetch.
     */
    orderBy?: DroitOrderByWithRelationInput | DroitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DroitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Droits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Droits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Droits
    **/
    _count?: true | DroitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DroitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DroitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DroitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DroitMaxAggregateInputType
  }

  export type GetDroitAggregateType<T extends DroitAggregateArgs> = {
        [P in keyof T & keyof AggregateDroit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDroit[P]>
      : GetScalarType<T[P], AggregateDroit[P]>
  }




  export type DroitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DroitWhereInput
    orderBy?: DroitOrderByWithAggregationInput | DroitOrderByWithAggregationInput[]
    by: DroitScalarFieldEnum[] | DroitScalarFieldEnum
    having?: DroitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DroitCountAggregateInputType | true
    _avg?: DroitAvgAggregateInputType
    _sum?: DroitSumAggregateInputType
    _min?: DroitMinAggregateInputType
    _max?: DroitMaxAggregateInputType
  }

  export type DroitGroupByOutputType = {
    id: number
    name: string
    parent: string | null
    _count: DroitCountAggregateOutputType | null
    _avg: DroitAvgAggregateOutputType | null
    _sum: DroitSumAggregateOutputType | null
    _min: DroitMinAggregateOutputType | null
    _max: DroitMaxAggregateOutputType | null
  }

  type GetDroitGroupByPayload<T extends DroitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DroitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DroitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DroitGroupByOutputType[P]>
            : GetScalarType<T[P], DroitGroupByOutputType[P]>
        }
      >
    >


  export type DroitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parent?: boolean
  }, ExtArgs["result"]["droit"]>


  export type DroitSelectScalar = {
    id?: boolean
    name?: boolean
    parent?: boolean
  }


  export type $DroitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Droit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      parent: string | null
    }, ExtArgs["result"]["droit"]>
    composites: {}
  }

  type DroitGetPayload<S extends boolean | null | undefined | DroitDefaultArgs> = $Result.GetResult<Prisma.$DroitPayload, S>

  type DroitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DroitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DroitCountAggregateInputType | true
    }

  export interface DroitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Droit'], meta: { name: 'Droit' } }
    /**
     * Find zero or one Droit that matches the filter.
     * @param {DroitFindUniqueArgs} args - Arguments to find a Droit
     * @example
     * // Get one Droit
     * const droit = await prisma.droit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DroitFindUniqueArgs>(args: SelectSubset<T, DroitFindUniqueArgs<ExtArgs>>): Prisma__DroitClient<$Result.GetResult<Prisma.$DroitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Droit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DroitFindUniqueOrThrowArgs} args - Arguments to find a Droit
     * @example
     * // Get one Droit
     * const droit = await prisma.droit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DroitFindUniqueOrThrowArgs>(args: SelectSubset<T, DroitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DroitClient<$Result.GetResult<Prisma.$DroitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Droit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroitFindFirstArgs} args - Arguments to find a Droit
     * @example
     * // Get one Droit
     * const droit = await prisma.droit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DroitFindFirstArgs>(args?: SelectSubset<T, DroitFindFirstArgs<ExtArgs>>): Prisma__DroitClient<$Result.GetResult<Prisma.$DroitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Droit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroitFindFirstOrThrowArgs} args - Arguments to find a Droit
     * @example
     * // Get one Droit
     * const droit = await prisma.droit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DroitFindFirstOrThrowArgs>(args?: SelectSubset<T, DroitFindFirstOrThrowArgs<ExtArgs>>): Prisma__DroitClient<$Result.GetResult<Prisma.$DroitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Droits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Droits
     * const droits = await prisma.droit.findMany()
     * 
     * // Get first 10 Droits
     * const droits = await prisma.droit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const droitWithIdOnly = await prisma.droit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DroitFindManyArgs>(args?: SelectSubset<T, DroitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DroitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Droit.
     * @param {DroitCreateArgs} args - Arguments to create a Droit.
     * @example
     * // Create one Droit
     * const Droit = await prisma.droit.create({
     *   data: {
     *     // ... data to create a Droit
     *   }
     * })
     * 
     */
    create<T extends DroitCreateArgs>(args: SelectSubset<T, DroitCreateArgs<ExtArgs>>): Prisma__DroitClient<$Result.GetResult<Prisma.$DroitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Droits.
     * @param {DroitCreateManyArgs} args - Arguments to create many Droits.
     * @example
     * // Create many Droits
     * const droit = await prisma.droit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DroitCreateManyArgs>(args?: SelectSubset<T, DroitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Droit.
     * @param {DroitDeleteArgs} args - Arguments to delete one Droit.
     * @example
     * // Delete one Droit
     * const Droit = await prisma.droit.delete({
     *   where: {
     *     // ... filter to delete one Droit
     *   }
     * })
     * 
     */
    delete<T extends DroitDeleteArgs>(args: SelectSubset<T, DroitDeleteArgs<ExtArgs>>): Prisma__DroitClient<$Result.GetResult<Prisma.$DroitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Droit.
     * @param {DroitUpdateArgs} args - Arguments to update one Droit.
     * @example
     * // Update one Droit
     * const droit = await prisma.droit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DroitUpdateArgs>(args: SelectSubset<T, DroitUpdateArgs<ExtArgs>>): Prisma__DroitClient<$Result.GetResult<Prisma.$DroitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Droits.
     * @param {DroitDeleteManyArgs} args - Arguments to filter Droits to delete.
     * @example
     * // Delete a few Droits
     * const { count } = await prisma.droit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DroitDeleteManyArgs>(args?: SelectSubset<T, DroitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Droits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Droits
     * const droit = await prisma.droit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DroitUpdateManyArgs>(args: SelectSubset<T, DroitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Droit.
     * @param {DroitUpsertArgs} args - Arguments to update or create a Droit.
     * @example
     * // Update or create a Droit
     * const droit = await prisma.droit.upsert({
     *   create: {
     *     // ... data to create a Droit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Droit we want to update
     *   }
     * })
     */
    upsert<T extends DroitUpsertArgs>(args: SelectSubset<T, DroitUpsertArgs<ExtArgs>>): Prisma__DroitClient<$Result.GetResult<Prisma.$DroitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Droits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroitCountArgs} args - Arguments to filter Droits to count.
     * @example
     * // Count the number of Droits
     * const count = await prisma.droit.count({
     *   where: {
     *     // ... the filter for the Droits we want to count
     *   }
     * })
    **/
    count<T extends DroitCountArgs>(
      args?: Subset<T, DroitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DroitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Droit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DroitAggregateArgs>(args: Subset<T, DroitAggregateArgs>): Prisma.PrismaPromise<GetDroitAggregateType<T>>

    /**
     * Group by Droit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DroitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DroitGroupByArgs['orderBy'] }
        : { orderBy?: DroitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DroitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDroitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Droit model
   */
  readonly fields: DroitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Droit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DroitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Droit model
   */ 
  interface DroitFieldRefs {
    readonly id: FieldRef<"Droit", 'Int'>
    readonly name: FieldRef<"Droit", 'String'>
    readonly parent: FieldRef<"Droit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Droit findUnique
   */
  export type DroitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Droit
     */
    select?: DroitSelect<ExtArgs> | null
    /**
     * Filter, which Droit to fetch.
     */
    where: DroitWhereUniqueInput
  }

  /**
   * Droit findUniqueOrThrow
   */
  export type DroitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Droit
     */
    select?: DroitSelect<ExtArgs> | null
    /**
     * Filter, which Droit to fetch.
     */
    where: DroitWhereUniqueInput
  }

  /**
   * Droit findFirst
   */
  export type DroitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Droit
     */
    select?: DroitSelect<ExtArgs> | null
    /**
     * Filter, which Droit to fetch.
     */
    where?: DroitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Droits to fetch.
     */
    orderBy?: DroitOrderByWithRelationInput | DroitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Droits.
     */
    cursor?: DroitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Droits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Droits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Droits.
     */
    distinct?: DroitScalarFieldEnum | DroitScalarFieldEnum[]
  }

  /**
   * Droit findFirstOrThrow
   */
  export type DroitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Droit
     */
    select?: DroitSelect<ExtArgs> | null
    /**
     * Filter, which Droit to fetch.
     */
    where?: DroitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Droits to fetch.
     */
    orderBy?: DroitOrderByWithRelationInput | DroitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Droits.
     */
    cursor?: DroitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Droits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Droits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Droits.
     */
    distinct?: DroitScalarFieldEnum | DroitScalarFieldEnum[]
  }

  /**
   * Droit findMany
   */
  export type DroitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Droit
     */
    select?: DroitSelect<ExtArgs> | null
    /**
     * Filter, which Droits to fetch.
     */
    where?: DroitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Droits to fetch.
     */
    orderBy?: DroitOrderByWithRelationInput | DroitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Droits.
     */
    cursor?: DroitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Droits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Droits.
     */
    skip?: number
    distinct?: DroitScalarFieldEnum | DroitScalarFieldEnum[]
  }

  /**
   * Droit create
   */
  export type DroitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Droit
     */
    select?: DroitSelect<ExtArgs> | null
    /**
     * The data needed to create a Droit.
     */
    data: XOR<DroitCreateInput, DroitUncheckedCreateInput>
  }

  /**
   * Droit createMany
   */
  export type DroitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Droits.
     */
    data: DroitCreateManyInput | DroitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Droit update
   */
  export type DroitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Droit
     */
    select?: DroitSelect<ExtArgs> | null
    /**
     * The data needed to update a Droit.
     */
    data: XOR<DroitUpdateInput, DroitUncheckedUpdateInput>
    /**
     * Choose, which Droit to update.
     */
    where: DroitWhereUniqueInput
  }

  /**
   * Droit updateMany
   */
  export type DroitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Droits.
     */
    data: XOR<DroitUpdateManyMutationInput, DroitUncheckedUpdateManyInput>
    /**
     * Filter which Droits to update
     */
    where?: DroitWhereInput
  }

  /**
   * Droit upsert
   */
  export type DroitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Droit
     */
    select?: DroitSelect<ExtArgs> | null
    /**
     * The filter to search for the Droit to update in case it exists.
     */
    where: DroitWhereUniqueInput
    /**
     * In case the Droit found by the `where` argument doesn't exist, create a new Droit with this data.
     */
    create: XOR<DroitCreateInput, DroitUncheckedCreateInput>
    /**
     * In case the Droit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DroitUpdateInput, DroitUncheckedUpdateInput>
  }

  /**
   * Droit delete
   */
  export type DroitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Droit
     */
    select?: DroitSelect<ExtArgs> | null
    /**
     * Filter which Droit to delete.
     */
    where: DroitWhereUniqueInput
  }

  /**
   * Droit deleteMany
   */
  export type DroitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Droits to delete
     */
    where?: DroitWhereInput
  }

  /**
   * Droit without action
   */
  export type DroitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Droit
     */
    select?: DroitSelect<ExtArgs> | null
  }


  /**
   * Model Societe
   */

  export type AggregateSociete = {
    _count: SocieteCountAggregateOutputType | null
    _avg: SocieteAvgAggregateOutputType | null
    _sum: SocieteSumAggregateOutputType | null
    _min: SocieteMinAggregateOutputType | null
    _max: SocieteMaxAggregateOutputType | null
  }

  export type SocieteAvgAggregateOutputType = {
    id: number | null
  }

  export type SocieteSumAggregateOutputType = {
    id: number | null
  }

  export type SocieteMinAggregateOutputType = {
    id: number | null
    name: string | null
    listChildren: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocieteMaxAggregateOutputType = {
    id: number | null
    name: string | null
    listChildren: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocieteCountAggregateOutputType = {
    id: number
    name: number
    listChildren: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SocieteAvgAggregateInputType = {
    id?: true
  }

  export type SocieteSumAggregateInputType = {
    id?: true
  }

  export type SocieteMinAggregateInputType = {
    id?: true
    name?: true
    listChildren?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocieteMaxAggregateInputType = {
    id?: true
    name?: true
    listChildren?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocieteCountAggregateInputType = {
    id?: true
    name?: true
    listChildren?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SocieteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Societe to aggregate.
     */
    where?: SocieteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Societes to fetch.
     */
    orderBy?: SocieteOrderByWithRelationInput | SocieteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocieteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Societes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Societes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Societes
    **/
    _count?: true | SocieteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocieteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocieteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocieteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocieteMaxAggregateInputType
  }

  export type GetSocieteAggregateType<T extends SocieteAggregateArgs> = {
        [P in keyof T & keyof AggregateSociete]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSociete[P]>
      : GetScalarType<T[P], AggregateSociete[P]>
  }




  export type SocieteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocieteWhereInput
    orderBy?: SocieteOrderByWithAggregationInput | SocieteOrderByWithAggregationInput[]
    by: SocieteScalarFieldEnum[] | SocieteScalarFieldEnum
    having?: SocieteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocieteCountAggregateInputType | true
    _avg?: SocieteAvgAggregateInputType
    _sum?: SocieteSumAggregateInputType
    _min?: SocieteMinAggregateInputType
    _max?: SocieteMaxAggregateInputType
  }

  export type SocieteGroupByOutputType = {
    id: number
    name: string
    listChildren: string | null
    createdAt: Date
    updatedAt: Date
    _count: SocieteCountAggregateOutputType | null
    _avg: SocieteAvgAggregateOutputType | null
    _sum: SocieteSumAggregateOutputType | null
    _min: SocieteMinAggregateOutputType | null
    _max: SocieteMaxAggregateOutputType | null
  }

  type GetSocieteGroupByPayload<T extends SocieteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocieteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocieteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocieteGroupByOutputType[P]>
            : GetScalarType<T[P], SocieteGroupByOutputType[P]>
        }
      >
    >


  export type SocieteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    listChildren?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["societe"]>


  export type SocieteSelectScalar = {
    id?: boolean
    name?: boolean
    listChildren?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SocietePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Societe"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      listChildren: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["societe"]>
    composites: {}
  }

  type SocieteGetPayload<S extends boolean | null | undefined | SocieteDefaultArgs> = $Result.GetResult<Prisma.$SocietePayload, S>

  type SocieteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SocieteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SocieteCountAggregateInputType | true
    }

  export interface SocieteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Societe'], meta: { name: 'Societe' } }
    /**
     * Find zero or one Societe that matches the filter.
     * @param {SocieteFindUniqueArgs} args - Arguments to find a Societe
     * @example
     * // Get one Societe
     * const societe = await prisma.societe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocieteFindUniqueArgs>(args: SelectSubset<T, SocieteFindUniqueArgs<ExtArgs>>): Prisma__SocieteClient<$Result.GetResult<Prisma.$SocietePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Societe that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SocieteFindUniqueOrThrowArgs} args - Arguments to find a Societe
     * @example
     * // Get one Societe
     * const societe = await prisma.societe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocieteFindUniqueOrThrowArgs>(args: SelectSubset<T, SocieteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocieteClient<$Result.GetResult<Prisma.$SocietePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Societe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocieteFindFirstArgs} args - Arguments to find a Societe
     * @example
     * // Get one Societe
     * const societe = await prisma.societe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocieteFindFirstArgs>(args?: SelectSubset<T, SocieteFindFirstArgs<ExtArgs>>): Prisma__SocieteClient<$Result.GetResult<Prisma.$SocietePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Societe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocieteFindFirstOrThrowArgs} args - Arguments to find a Societe
     * @example
     * // Get one Societe
     * const societe = await prisma.societe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocieteFindFirstOrThrowArgs>(args?: SelectSubset<T, SocieteFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocieteClient<$Result.GetResult<Prisma.$SocietePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Societes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocieteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Societes
     * const societes = await prisma.societe.findMany()
     * 
     * // Get first 10 Societes
     * const societes = await prisma.societe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const societeWithIdOnly = await prisma.societe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocieteFindManyArgs>(args?: SelectSubset<T, SocieteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocietePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Societe.
     * @param {SocieteCreateArgs} args - Arguments to create a Societe.
     * @example
     * // Create one Societe
     * const Societe = await prisma.societe.create({
     *   data: {
     *     // ... data to create a Societe
     *   }
     * })
     * 
     */
    create<T extends SocieteCreateArgs>(args: SelectSubset<T, SocieteCreateArgs<ExtArgs>>): Prisma__SocieteClient<$Result.GetResult<Prisma.$SocietePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Societes.
     * @param {SocieteCreateManyArgs} args - Arguments to create many Societes.
     * @example
     * // Create many Societes
     * const societe = await prisma.societe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocieteCreateManyArgs>(args?: SelectSubset<T, SocieteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Societe.
     * @param {SocieteDeleteArgs} args - Arguments to delete one Societe.
     * @example
     * // Delete one Societe
     * const Societe = await prisma.societe.delete({
     *   where: {
     *     // ... filter to delete one Societe
     *   }
     * })
     * 
     */
    delete<T extends SocieteDeleteArgs>(args: SelectSubset<T, SocieteDeleteArgs<ExtArgs>>): Prisma__SocieteClient<$Result.GetResult<Prisma.$SocietePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Societe.
     * @param {SocieteUpdateArgs} args - Arguments to update one Societe.
     * @example
     * // Update one Societe
     * const societe = await prisma.societe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocieteUpdateArgs>(args: SelectSubset<T, SocieteUpdateArgs<ExtArgs>>): Prisma__SocieteClient<$Result.GetResult<Prisma.$SocietePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Societes.
     * @param {SocieteDeleteManyArgs} args - Arguments to filter Societes to delete.
     * @example
     * // Delete a few Societes
     * const { count } = await prisma.societe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocieteDeleteManyArgs>(args?: SelectSubset<T, SocieteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Societes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocieteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Societes
     * const societe = await prisma.societe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocieteUpdateManyArgs>(args: SelectSubset<T, SocieteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Societe.
     * @param {SocieteUpsertArgs} args - Arguments to update or create a Societe.
     * @example
     * // Update or create a Societe
     * const societe = await prisma.societe.upsert({
     *   create: {
     *     // ... data to create a Societe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Societe we want to update
     *   }
     * })
     */
    upsert<T extends SocieteUpsertArgs>(args: SelectSubset<T, SocieteUpsertArgs<ExtArgs>>): Prisma__SocieteClient<$Result.GetResult<Prisma.$SocietePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Societes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocieteCountArgs} args - Arguments to filter Societes to count.
     * @example
     * // Count the number of Societes
     * const count = await prisma.societe.count({
     *   where: {
     *     // ... the filter for the Societes we want to count
     *   }
     * })
    **/
    count<T extends SocieteCountArgs>(
      args?: Subset<T, SocieteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocieteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Societe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocieteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SocieteAggregateArgs>(args: Subset<T, SocieteAggregateArgs>): Prisma.PrismaPromise<GetSocieteAggregateType<T>>

    /**
     * Group by Societe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocieteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SocieteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocieteGroupByArgs['orderBy'] }
        : { orderBy?: SocieteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SocieteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocieteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Societe model
   */
  readonly fields: SocieteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Societe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocieteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Societe model
   */ 
  interface SocieteFieldRefs {
    readonly id: FieldRef<"Societe", 'Int'>
    readonly name: FieldRef<"Societe", 'String'>
    readonly listChildren: FieldRef<"Societe", 'String'>
    readonly createdAt: FieldRef<"Societe", 'DateTime'>
    readonly updatedAt: FieldRef<"Societe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Societe findUnique
   */
  export type SocieteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Societe
     */
    select?: SocieteSelect<ExtArgs> | null
    /**
     * Filter, which Societe to fetch.
     */
    where: SocieteWhereUniqueInput
  }

  /**
   * Societe findUniqueOrThrow
   */
  export type SocieteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Societe
     */
    select?: SocieteSelect<ExtArgs> | null
    /**
     * Filter, which Societe to fetch.
     */
    where: SocieteWhereUniqueInput
  }

  /**
   * Societe findFirst
   */
  export type SocieteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Societe
     */
    select?: SocieteSelect<ExtArgs> | null
    /**
     * Filter, which Societe to fetch.
     */
    where?: SocieteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Societes to fetch.
     */
    orderBy?: SocieteOrderByWithRelationInput | SocieteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Societes.
     */
    cursor?: SocieteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Societes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Societes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Societes.
     */
    distinct?: SocieteScalarFieldEnum | SocieteScalarFieldEnum[]
  }

  /**
   * Societe findFirstOrThrow
   */
  export type SocieteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Societe
     */
    select?: SocieteSelect<ExtArgs> | null
    /**
     * Filter, which Societe to fetch.
     */
    where?: SocieteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Societes to fetch.
     */
    orderBy?: SocieteOrderByWithRelationInput | SocieteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Societes.
     */
    cursor?: SocieteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Societes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Societes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Societes.
     */
    distinct?: SocieteScalarFieldEnum | SocieteScalarFieldEnum[]
  }

  /**
   * Societe findMany
   */
  export type SocieteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Societe
     */
    select?: SocieteSelect<ExtArgs> | null
    /**
     * Filter, which Societes to fetch.
     */
    where?: SocieteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Societes to fetch.
     */
    orderBy?: SocieteOrderByWithRelationInput | SocieteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Societes.
     */
    cursor?: SocieteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Societes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Societes.
     */
    skip?: number
    distinct?: SocieteScalarFieldEnum | SocieteScalarFieldEnum[]
  }

  /**
   * Societe create
   */
  export type SocieteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Societe
     */
    select?: SocieteSelect<ExtArgs> | null
    /**
     * The data needed to create a Societe.
     */
    data: XOR<SocieteCreateInput, SocieteUncheckedCreateInput>
  }

  /**
   * Societe createMany
   */
  export type SocieteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Societes.
     */
    data: SocieteCreateManyInput | SocieteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Societe update
   */
  export type SocieteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Societe
     */
    select?: SocieteSelect<ExtArgs> | null
    /**
     * The data needed to update a Societe.
     */
    data: XOR<SocieteUpdateInput, SocieteUncheckedUpdateInput>
    /**
     * Choose, which Societe to update.
     */
    where: SocieteWhereUniqueInput
  }

  /**
   * Societe updateMany
   */
  export type SocieteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Societes.
     */
    data: XOR<SocieteUpdateManyMutationInput, SocieteUncheckedUpdateManyInput>
    /**
     * Filter which Societes to update
     */
    where?: SocieteWhereInput
  }

  /**
   * Societe upsert
   */
  export type SocieteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Societe
     */
    select?: SocieteSelect<ExtArgs> | null
    /**
     * The filter to search for the Societe to update in case it exists.
     */
    where: SocieteWhereUniqueInput
    /**
     * In case the Societe found by the `where` argument doesn't exist, create a new Societe with this data.
     */
    create: XOR<SocieteCreateInput, SocieteUncheckedCreateInput>
    /**
     * In case the Societe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocieteUpdateInput, SocieteUncheckedUpdateInput>
  }

  /**
   * Societe delete
   */
  export type SocieteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Societe
     */
    select?: SocieteSelect<ExtArgs> | null
    /**
     * Filter which Societe to delete.
     */
    where: SocieteWhereUniqueInput
  }

  /**
   * Societe deleteMany
   */
  export type SocieteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Societes to delete
     */
    where?: SocieteWhereInput
  }

  /**
   * Societe without action
   */
  export type SocieteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Societe
     */
    select?: SocieteSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    subtitle: 'subtitle',
    address: 'address',
    link: 'link',
    debutAt: 'debutAt',
    finAt: 'finAt',
    fullDay: 'fullDay',
    userId: 'userId',
    typeEvent: 'typeEvent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const UserParramsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    role: 'role',
    color: 'color'
  };

  export type UserParramsScalarFieldEnum = (typeof UserParramsScalarFieldEnum)[keyof typeof UserParramsScalarFieldEnum]


  export const GradeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    listDroit: 'listDroit',
    societeId: 'societeId'
  };

  export type GradeScalarFieldEnum = (typeof GradeScalarFieldEnum)[keyof typeof GradeScalarFieldEnum]


  export const DroitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    parent: 'parent'
  };

  export type DroitScalarFieldEnum = (typeof DroitScalarFieldEnum)[keyof typeof DroitScalarFieldEnum]


  export const SocieteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    listChildren: 'listChildren',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SocieteScalarFieldEnum = (typeof SocieteScalarFieldEnum)[keyof typeof SocieteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    subtitle?: StringNullableFilter<"Event"> | string | null
    address?: StringNullableFilter<"Event"> | string | null
    link?: StringNullableFilter<"Event"> | string | null
    debutAt?: DateTimeFilter<"Event"> | Date | string
    finAt?: DateTimeFilter<"Event"> | Date | string
    fullDay?: BoolFilter<"Event"> | boolean
    userId?: StringFilter<"Event"> | string
    typeEvent?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    debutAt?: SortOrder
    finAt?: SortOrder
    fullDay?: SortOrder
    userId?: SortOrder
    typeEvent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    subtitle?: StringNullableFilter<"Event"> | string | null
    address?: StringNullableFilter<"Event"> | string | null
    link?: StringNullableFilter<"Event"> | string | null
    debutAt?: DateTimeFilter<"Event"> | Date | string
    finAt?: DateTimeFilter<"Event"> | Date | string
    fullDay?: BoolFilter<"Event"> | boolean
    userId?: StringFilter<"Event"> | string
    typeEvent?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    debutAt?: SortOrder
    finAt?: SortOrder
    fullDay?: SortOrder
    userId?: SortOrder
    typeEvent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    title?: StringWithAggregatesFilter<"Event"> | string
    subtitle?: StringNullableWithAggregatesFilter<"Event"> | string | null
    address?: StringNullableWithAggregatesFilter<"Event"> | string | null
    link?: StringNullableWithAggregatesFilter<"Event"> | string | null
    debutAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    finAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    fullDay?: BoolWithAggregatesFilter<"Event"> | boolean
    userId?: StringWithAggregatesFilter<"Event"> | string
    typeEvent?: StringNullableWithAggregatesFilter<"Event"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type UserParramsWhereInput = {
    AND?: UserParramsWhereInput | UserParramsWhereInput[]
    OR?: UserParramsWhereInput[]
    NOT?: UserParramsWhereInput | UserParramsWhereInput[]
    id?: IntFilter<"UserParrams"> | number
    userId?: StringFilter<"UserParrams"> | string
    role?: StringFilter<"UserParrams"> | string
    color?: StringFilter<"UserParrams"> | string
  }

  export type UserParramsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    color?: SortOrder
  }

  export type UserParramsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: UserParramsWhereInput | UserParramsWhereInput[]
    OR?: UserParramsWhereInput[]
    NOT?: UserParramsWhereInput | UserParramsWhereInput[]
    role?: StringFilter<"UserParrams"> | string
    color?: StringFilter<"UserParrams"> | string
  }, "id" | "userId">

  export type UserParramsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    color?: SortOrder
    _count?: UserParramsCountOrderByAggregateInput
    _avg?: UserParramsAvgOrderByAggregateInput
    _max?: UserParramsMaxOrderByAggregateInput
    _min?: UserParramsMinOrderByAggregateInput
    _sum?: UserParramsSumOrderByAggregateInput
  }

  export type UserParramsScalarWhereWithAggregatesInput = {
    AND?: UserParramsScalarWhereWithAggregatesInput | UserParramsScalarWhereWithAggregatesInput[]
    OR?: UserParramsScalarWhereWithAggregatesInput[]
    NOT?: UserParramsScalarWhereWithAggregatesInput | UserParramsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserParrams"> | number
    userId?: StringWithAggregatesFilter<"UserParrams"> | string
    role?: StringWithAggregatesFilter<"UserParrams"> | string
    color?: StringWithAggregatesFilter<"UserParrams"> | string
  }

  export type GradeWhereInput = {
    AND?: GradeWhereInput | GradeWhereInput[]
    OR?: GradeWhereInput[]
    NOT?: GradeWhereInput | GradeWhereInput[]
    id?: IntFilter<"Grade"> | number
    name?: StringFilter<"Grade"> | string
    listDroit?: StringNullableFilter<"Grade"> | string | null
    societeId?: StringFilter<"Grade"> | string
  }

  export type GradeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    listDroit?: SortOrderInput | SortOrder
    societeId?: SortOrder
  }

  export type GradeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GradeWhereInput | GradeWhereInput[]
    OR?: GradeWhereInput[]
    NOT?: GradeWhereInput | GradeWhereInput[]
    name?: StringFilter<"Grade"> | string
    listDroit?: StringNullableFilter<"Grade"> | string | null
    societeId?: StringFilter<"Grade"> | string
  }, "id">

  export type GradeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    listDroit?: SortOrderInput | SortOrder
    societeId?: SortOrder
    _count?: GradeCountOrderByAggregateInput
    _avg?: GradeAvgOrderByAggregateInput
    _max?: GradeMaxOrderByAggregateInput
    _min?: GradeMinOrderByAggregateInput
    _sum?: GradeSumOrderByAggregateInput
  }

  export type GradeScalarWhereWithAggregatesInput = {
    AND?: GradeScalarWhereWithAggregatesInput | GradeScalarWhereWithAggregatesInput[]
    OR?: GradeScalarWhereWithAggregatesInput[]
    NOT?: GradeScalarWhereWithAggregatesInput | GradeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Grade"> | number
    name?: StringWithAggregatesFilter<"Grade"> | string
    listDroit?: StringNullableWithAggregatesFilter<"Grade"> | string | null
    societeId?: StringWithAggregatesFilter<"Grade"> | string
  }

  export type DroitWhereInput = {
    AND?: DroitWhereInput | DroitWhereInput[]
    OR?: DroitWhereInput[]
    NOT?: DroitWhereInput | DroitWhereInput[]
    id?: IntFilter<"Droit"> | number
    name?: StringFilter<"Droit"> | string
    parent?: StringNullableFilter<"Droit"> | string | null
  }

  export type DroitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    parent?: SortOrderInput | SortOrder
  }

  export type DroitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DroitWhereInput | DroitWhereInput[]
    OR?: DroitWhereInput[]
    NOT?: DroitWhereInput | DroitWhereInput[]
    name?: StringFilter<"Droit"> | string
    parent?: StringNullableFilter<"Droit"> | string | null
  }, "id">

  export type DroitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    parent?: SortOrderInput | SortOrder
    _count?: DroitCountOrderByAggregateInput
    _avg?: DroitAvgOrderByAggregateInput
    _max?: DroitMaxOrderByAggregateInput
    _min?: DroitMinOrderByAggregateInput
    _sum?: DroitSumOrderByAggregateInput
  }

  export type DroitScalarWhereWithAggregatesInput = {
    AND?: DroitScalarWhereWithAggregatesInput | DroitScalarWhereWithAggregatesInput[]
    OR?: DroitScalarWhereWithAggregatesInput[]
    NOT?: DroitScalarWhereWithAggregatesInput | DroitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Droit"> | number
    name?: StringWithAggregatesFilter<"Droit"> | string
    parent?: StringNullableWithAggregatesFilter<"Droit"> | string | null
  }

  export type SocieteWhereInput = {
    AND?: SocieteWhereInput | SocieteWhereInput[]
    OR?: SocieteWhereInput[]
    NOT?: SocieteWhereInput | SocieteWhereInput[]
    id?: IntFilter<"Societe"> | number
    name?: StringFilter<"Societe"> | string
    listChildren?: StringNullableFilter<"Societe"> | string | null
    createdAt?: DateTimeFilter<"Societe"> | Date | string
    updatedAt?: DateTimeFilter<"Societe"> | Date | string
  }

  export type SocieteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    listChildren?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocieteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SocieteWhereInput | SocieteWhereInput[]
    OR?: SocieteWhereInput[]
    NOT?: SocieteWhereInput | SocieteWhereInput[]
    listChildren?: StringNullableFilter<"Societe"> | string | null
    createdAt?: DateTimeFilter<"Societe"> | Date | string
    updatedAt?: DateTimeFilter<"Societe"> | Date | string
  }, "id" | "name">

  export type SocieteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    listChildren?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SocieteCountOrderByAggregateInput
    _avg?: SocieteAvgOrderByAggregateInput
    _max?: SocieteMaxOrderByAggregateInput
    _min?: SocieteMinOrderByAggregateInput
    _sum?: SocieteSumOrderByAggregateInput
  }

  export type SocieteScalarWhereWithAggregatesInput = {
    AND?: SocieteScalarWhereWithAggregatesInput | SocieteScalarWhereWithAggregatesInput[]
    OR?: SocieteScalarWhereWithAggregatesInput[]
    NOT?: SocieteScalarWhereWithAggregatesInput | SocieteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Societe"> | number
    name?: StringWithAggregatesFilter<"Societe"> | string
    listChildren?: StringNullableWithAggregatesFilter<"Societe"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Societe"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Societe"> | Date | string
  }

  export type EventCreateInput = {
    title: string
    subtitle?: string | null
    address?: string | null
    link?: string | null
    debutAt: Date | string
    finAt: Date | string
    fullDay?: boolean
    userId: string
    typeEvent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUncheckedCreateInput = {
    id?: number
    title: string
    subtitle?: string | null
    address?: string | null
    link?: string | null
    debutAt: Date | string
    finAt: Date | string
    fullDay?: boolean
    userId: string
    typeEvent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    debutAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullDay?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    typeEvent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    debutAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullDay?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    typeEvent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyInput = {
    id?: number
    title: string
    subtitle?: string | null
    address?: string | null
    link?: string | null
    debutAt: Date | string
    finAt: Date | string
    fullDay?: boolean
    userId: string
    typeEvent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    debutAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullDay?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    typeEvent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    debutAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullDay?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    typeEvent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserParramsCreateInput = {
    userId: string
    role?: string
    color?: string
  }

  export type UserParramsUncheckedCreateInput = {
    id?: number
    userId: string
    role?: string
    color?: string
  }

  export type UserParramsUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type UserParramsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type UserParramsCreateManyInput = {
    id?: number
    userId: string
    role?: string
    color?: string
  }

  export type UserParramsUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type UserParramsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type GradeCreateInput = {
    name: string
    listDroit?: string | null
    societeId: string
  }

  export type GradeUncheckedCreateInput = {
    id?: number
    name: string
    listDroit?: string | null
    societeId: string
  }

  export type GradeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    listDroit?: NullableStringFieldUpdateOperationsInput | string | null
    societeId?: StringFieldUpdateOperationsInput | string
  }

  export type GradeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    listDroit?: NullableStringFieldUpdateOperationsInput | string | null
    societeId?: StringFieldUpdateOperationsInput | string
  }

  export type GradeCreateManyInput = {
    id?: number
    name: string
    listDroit?: string | null
    societeId: string
  }

  export type GradeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    listDroit?: NullableStringFieldUpdateOperationsInput | string | null
    societeId?: StringFieldUpdateOperationsInput | string
  }

  export type GradeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    listDroit?: NullableStringFieldUpdateOperationsInput | string | null
    societeId?: StringFieldUpdateOperationsInput | string
  }

  export type DroitCreateInput = {
    name: string
    parent?: string | null
  }

  export type DroitUncheckedCreateInput = {
    id?: number
    name: string
    parent?: string | null
  }

  export type DroitUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    parent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DroitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DroitCreateManyInput = {
    id?: number
    name: string
    parent?: string | null
  }

  export type DroitUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    parent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DroitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SocieteCreateInput = {
    name: string
    listChildren?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocieteUncheckedCreateInput = {
    id?: number
    name: string
    listChildren?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocieteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    listChildren?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocieteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    listChildren?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocieteCreateManyInput = {
    id?: number
    name: string
    listChildren?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocieteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    listChildren?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocieteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    listChildren?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    address?: SortOrder
    link?: SortOrder
    debutAt?: SortOrder
    finAt?: SortOrder
    fullDay?: SortOrder
    userId?: SortOrder
    typeEvent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    address?: SortOrder
    link?: SortOrder
    debutAt?: SortOrder
    finAt?: SortOrder
    fullDay?: SortOrder
    userId?: SortOrder
    typeEvent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    address?: SortOrder
    link?: SortOrder
    debutAt?: SortOrder
    finAt?: SortOrder
    fullDay?: SortOrder
    userId?: SortOrder
    typeEvent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserParramsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    color?: SortOrder
  }

  export type UserParramsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserParramsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    color?: SortOrder
  }

  export type UserParramsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    color?: SortOrder
  }

  export type UserParramsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GradeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    listDroit?: SortOrder
    societeId?: SortOrder
  }

  export type GradeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GradeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    listDroit?: SortOrder
    societeId?: SortOrder
  }

  export type GradeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    listDroit?: SortOrder
    societeId?: SortOrder
  }

  export type GradeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DroitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parent?: SortOrder
  }

  export type DroitAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DroitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parent?: SortOrder
  }

  export type DroitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parent?: SortOrder
  }

  export type DroitSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SocieteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    listChildren?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocieteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SocieteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    listChildren?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocieteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    listChildren?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocieteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use EventDefaultArgs instead
     */
    export type EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserParramsDefaultArgs instead
     */
    export type UserParramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserParramsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GradeDefaultArgs instead
     */
    export type GradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GradeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DroitDefaultArgs instead
     */
    export type DroitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DroitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SocieteDefaultArgs instead
     */
    export type SocieteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SocieteDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}