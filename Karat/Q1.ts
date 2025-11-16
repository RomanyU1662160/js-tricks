import {
  flattenDeep,
  flatten,
  sortBy,
  uniq,
  chain,
  concat,
  zipObject,
  groupBy,
  intersection
} from 'lodash'

/*
You are implementing a service to manage bank customers’ accounts in-memory.
Write functions to:

create an account
get an account by ID
update balance
list all accounts for a given customer
You don’t need a database – store data in memory."
*/

// account service
type Account = {
  id: number
  name: string
  customer_id: string
  balance: number
}

type APIResponse = {
  status: number
  message: string
  errors?: string[]
}

const accounts = new Map<number, Account>()

export const classService = {
  createAccount: async (account: Account) => {
    try {
      if (accounts.has(account.id)) {
        throw new Error('account is already exist')
      }
      accounts.set(account.id, account)
      return account.id
    } catch (e) {
      console.log((e as Error).message)
      throw e
    }
  },
  listAccounts: async () => {
    return accounts
  }
}

// utils

export const handleCreateAccount = async (
  account: Account
): Promise<APIResponse> => {
  try {
    await classService.createAccount(account)
    return {
      status: 201,
      message: 'Account successfully created'
    }
  } catch (e) {
    return {
      status: 500,
      message: 'Account cannot be created',
      errors: [(e as Error).message]
    }
  }
}

export const handleListAccounts = async (): Promise<
  APIResponse & { accounts: Account[] }
> => {
  try {
    const accounts = await classService.listAccounts()
    return {
      status: 201,
      message: 'Account successfully retrieved',
      accounts: [...accounts.values()]
    }
  } catch (e) {
    return {
      status: 500,
      message: 'Account cannot be created',
      errors: [(e as Error).message],
      accounts: []
    }
  }
}

const newAccount: Account = {
  id: 1,
  customer_id: '123',
  name: 'credit',
  balance: 0
}

//  handleCreateAccount(newAccount).then((res) => console.log(JSON.stringify(res, null, 2))).catch((e) => { console.log("Error while creating a new account")})
