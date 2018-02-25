import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score
from sklearn.metrics import roc_auc_score, make_scorer

def aucCV(features, labels):
  # Ensemble - RandomForest
  model = RandomForestClassifier(criterion="entropy", n_estimators=41)
  scores = cross_val_score(model, features, labels, cv=10, scoring=make_scorer(roc_auc_score))
  return scores

def aucTest(trainFeatures, trainLabels, testFeatures, testLabels):
  # Ensemble - RandomForest
  model = RandomForestClassifier(criterion="entropy", n_estimators=41)
  model.fit(trainFeatures, trainLabels)

  testOutputs = model.predict(testFeatures)
  return roc_auc_score(testLabels, testOutputs)

# Run this code only if being used as a script, not being imported
if __name__ == "__main__":
  data = np.loadtxt('spamTrain.csv', delimiter=',')

  # Randomly shuffle rows of data set then separate labels (last column)
  shuffleIndex = np.arange(np.shape(data)[0])
  np.random.shuffle(shuffleIndex)
  data = data[shuffleIndex,:]
  features = data[:,:-1]
  labels = data[:,—1]

  # 10-fold cross-validation
  print("10-fold cross—validation mean AUC:", np.mean(aucCV(features, labels)))

  # Arbitrarily choose all odd samples as train set and all even as test set
  # then compute test set AUC for model trained only on fixed train set
  trainFeatures = features[0::2,:]
  trainLabels = labels[0::2]
  testFeatures = features[1::2,:]
  testLabels = labels[1::2]
  print("Test set AUC: ", aucTest(trainFeatures, trainLabels, testFeatures, testLabels))
