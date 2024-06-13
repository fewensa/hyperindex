/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */
import {
  ORMPContract,
    ORMP_HashImportedEntity,
    ORMP_MessageAcceptedEntity,
    ORMP_MessageAssignedEntity,
    ORMP_MessageDispatchedEntity,
  SignaturepubContract,
    Signaturepub_SignatureSubmittionEntity,
  USDTContract,
    USDT_ApprovalEntity,
    USDT_BlockPlacedEntity,
    USDT_BlockReleasedEntity,
    USDT_DestroyedBlockedFundsEntity,
    USDT_MintEntity,
    USDT_OwnershipTransferredEntity,
    USDT_RedeemEntity,
    USDT_TransferEntity,
EventsSummaryEntity
} from "generated";

export const GLOBAL_EVENTS_SUMMARY_KEY = "GlobalEventsSummary";

const INITIAL_EVENTS_SUMMARY: EventsSummaryEntity = {
  id: GLOBAL_EVENTS_SUMMARY_KEY,
    oRMP_HashImportedCount: BigInt(0),
    oRMP_MessageAcceptedCount: BigInt(0),
    oRMP_MessageAssignedCount: BigInt(0),
    oRMP_MessageDispatchedCount: BigInt(0),
    signaturepub_SignatureSubmittionCount: BigInt(0),
    uSDT_ApprovalCount: BigInt(0),
    uSDT_BlockPlacedCount: BigInt(0),
    uSDT_BlockReleasedCount: BigInt(0),
    uSDT_DestroyedBlockedFundsCount: BigInt(0),
    uSDT_MintCount: BigInt(0),
    uSDT_OwnershipTransferredCount: BigInt(0),
    uSDT_RedeemCount: BigInt(0),
    uSDT_TransferCount: BigInt(0),
};

    ORMPContract.HashImported.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    ORMPContract.HashImported.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oRMP_HashImportedCount: currentSummaryEntity.oRMP_HashImportedCount + BigInt(1),
  };

  const oRMP_HashImportedEntity: ORMP_HashImportedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oracle: event.params.oracle      ,
      chainId: event.params.chainId      ,
      channel: event.params.channel      ,
      msgIndex: event.params.msgIndex      ,
      hash: event.params.hash      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.ORMP_HashImported.set(oRMP_HashImportedEntity);
});
    ORMPContract.MessageAccepted.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    ORMPContract.MessageAccepted.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oRMP_MessageAcceptedCount: currentSummaryEntity.oRMP_MessageAcceptedCount + BigInt(1),
  };

  const oRMP_MessageAcceptedEntity: ORMP_MessageAcceptedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      msgHash: event.params.msgHash      ,
      message_0: event.params.message
          [0]
      ,
      message_1: event.params.message
          [1]
      ,
      message_2: event.params.message
          [2]
      ,
      message_3: event.params.message
          [3]
      ,
      message_4: event.params.message
          [4]
      ,
      message_5: event.params.message
          [5]
      ,
      message_6: event.params.message
          [6]
      ,
      message_7: event.params.message
          [7]
      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.ORMP_MessageAccepted.set(oRMP_MessageAcceptedEntity);
});
    ORMPContract.MessageAssigned.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    ORMPContract.MessageAssigned.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oRMP_MessageAssignedCount: currentSummaryEntity.oRMP_MessageAssignedCount + BigInt(1),
  };

  const oRMP_MessageAssignedEntity: ORMP_MessageAssignedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      msgHash: event.params.msgHash      ,
      oracle: event.params.oracle      ,
      relayer: event.params.relayer      ,
      oracleFee: event.params.oracleFee      ,
      relayerFee: event.params.relayerFee      ,
      params: event.params.params      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.ORMP_MessageAssigned.set(oRMP_MessageAssignedEntity);
});
    ORMPContract.MessageDispatched.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    ORMPContract.MessageDispatched.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    oRMP_MessageDispatchedCount: currentSummaryEntity.oRMP_MessageDispatchedCount + BigInt(1),
  };

  const oRMP_MessageDispatchedEntity: ORMP_MessageDispatchedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      msgHash: event.params.msgHash      ,
      dispatchResult: event.params.dispatchResult      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.ORMP_MessageDispatched.set(oRMP_MessageDispatchedEntity);
});
    SignaturepubContract.SignatureSubmittion.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SignaturepubContract.SignatureSubmittion.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    signaturepub_SignatureSubmittionCount: currentSummaryEntity.signaturepub_SignatureSubmittionCount + BigInt(1),
  };

  const signaturepub_SignatureSubmittionEntity: Signaturepub_SignatureSubmittionEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      chainId: event.params.chainId      ,
      channel: event.params.channel      ,
      signer: event.params.signer      ,
      msgIndex: event.params.msgIndex      ,
      signature: event.params.signature      ,
      data: event.params.data      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Signaturepub_SignatureSubmittion.set(signaturepub_SignatureSubmittionEntity);
});
    USDTContract.Approval.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    USDTContract.Approval.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    uSDT_ApprovalCount: currentSummaryEntity.uSDT_ApprovalCount + BigInt(1),
  };

  const uSDT_ApprovalEntity: USDT_ApprovalEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      owner: event.params.owner      ,
      spender: event.params.spender      ,
      value: event.params.value      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.USDT_Approval.set(uSDT_ApprovalEntity);
});
    USDTContract.BlockPlaced.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    USDTContract.BlockPlaced.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    uSDT_BlockPlacedCount: currentSummaryEntity.uSDT_BlockPlacedCount + BigInt(1),
  };

  const uSDT_BlockPlacedEntity: USDT_BlockPlacedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      _user: event.params._user      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.USDT_BlockPlaced.set(uSDT_BlockPlacedEntity);
});
    USDTContract.BlockReleased.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    USDTContract.BlockReleased.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    uSDT_BlockReleasedCount: currentSummaryEntity.uSDT_BlockReleasedCount + BigInt(1),
  };

  const uSDT_BlockReleasedEntity: USDT_BlockReleasedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      _user: event.params._user      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.USDT_BlockReleased.set(uSDT_BlockReleasedEntity);
});
    USDTContract.DestroyedBlockedFunds.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    USDTContract.DestroyedBlockedFunds.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    uSDT_DestroyedBlockedFundsCount: currentSummaryEntity.uSDT_DestroyedBlockedFundsCount + BigInt(1),
  };

  const uSDT_DestroyedBlockedFundsEntity: USDT_DestroyedBlockedFundsEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      _blockedUser: event.params._blockedUser      ,
      _balance: event.params._balance      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.USDT_DestroyedBlockedFunds.set(uSDT_DestroyedBlockedFundsEntity);
});
    USDTContract.Mint.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    USDTContract.Mint.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    uSDT_MintCount: currentSummaryEntity.uSDT_MintCount + BigInt(1),
  };

  const uSDT_MintEntity: USDT_MintEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      _destination: event.params._destination      ,
      _amount: event.params._amount      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.USDT_Mint.set(uSDT_MintEntity);
});
    USDTContract.OwnershipTransferred.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    USDTContract.OwnershipTransferred.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    uSDT_OwnershipTransferredCount: currentSummaryEntity.uSDT_OwnershipTransferredCount + BigInt(1),
  };

  const uSDT_OwnershipTransferredEntity: USDT_OwnershipTransferredEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      previousOwner: event.params.previousOwner      ,
      newOwner: event.params.newOwner      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.USDT_OwnershipTransferred.set(uSDT_OwnershipTransferredEntity);
});
    USDTContract.Redeem.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    USDTContract.Redeem.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    uSDT_RedeemCount: currentSummaryEntity.uSDT_RedeemCount + BigInt(1),
  };

  const uSDT_RedeemEntity: USDT_RedeemEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      _amount: event.params._amount      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.USDT_Redeem.set(uSDT_RedeemEntity);
});
    USDTContract.Transfer.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    USDTContract.Transfer.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    uSDT_TransferCount: currentSummaryEntity.uSDT_TransferCount + BigInt(1),
  };

  const uSDT_TransferEntity: USDT_TransferEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      from: event.params.from      ,
      to: event.params.to      ,
      value: event.params.value      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.USDT_Transfer.set(uSDT_TransferEntity);
});
