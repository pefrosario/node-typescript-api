import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { AccountModel } from '../../../../domain/models/account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccontMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const { insertedId: id } = await accountCollection.insertOne(accountData)
    const account = await accountCollection.findOne({ _id: id })
    return MongoHelper.map(account)
  }
}
