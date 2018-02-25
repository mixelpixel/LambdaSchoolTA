# Introduction to the Random Forests algorithm
In this article, you are going to learn one of the most famous Machine Learning algorithms. The Random Forests algorithm can be used for both classification and regression. We will discuss the algorithm in the following sections mentioned below:

1. What is the Random Forests algorithm?
2. How does the Random Forests algorithm work?
3. A programming example of Random Forests.
4. Advantages of a Random Forests algorithm.

## 1. What is the Random Forests algorithm?
To understand the Random Forests algorithm, you must understand a few basic concepts. I will cover those first. There are different types of Machine Learning Algorithms: Supervised, Unsupervised, and Semi-Supervised. The Random Forests algorithm falls under the Supervised category. This means that you teach the algorithm what to do. Supervised learning is so named because the data scientist acts as a guide to teach the algorithm which kinds of conclusions it should come up with. Supervised learning is like the way a child might learn arithmetic from a teacher by repeated demonstration of addition examples. Having seen and calculated addition repeatedly, the child will have learned a pattern, e.g. the result of adding any set of two natural numbers can be derived correctly by counting to the sum of both numbers. In Supervised learning, we train the algorithm with a given data set that has correctly corresponding labels. For example, a supervised algorithm will be trained on thousands of images of cats and dogs. Each data point in the training set has the proper label. The algorithm uses the given data relationships between features and labels as a baseline. For example, if the animal’s legs are longer than a certain number of centimeters, then the algorithm classifies that data point as an image of a dog.

Now, let’s talk about Ensemble Learning, a sub-category of Supervised Machine Learning. Ensemble Learning uses trees to make decisions. This means that we train the algorithm with trees to make decisions. The greater the number of trees, the better the decision making (i.e. classification). One analogy that might prove useful is to think about how your doctor goes about performing a diagnosis for a health complaint that you describe to her. If she cannot find the problem directly, then she may ask for an appropriate variety of tests to be performed, e.g., X-ray scans, fMRI, blood tests, consultations with experts, et cetera. She will then aggregate the data and expert opinions to make a diagnostic conclusion. Each of the individual tests will suggest a diagnosis, but only by putting them all together can an informed decision be reached. We now have all the basics to talk about Random Forests.

The Random Forests algorithm uses groups of trees (i.e. forests) to make decisions. The core idea is this:


_**“If one tree is good, then, provided that there is enough variety,  a forest should be better.”**_


The more trees in the forest, the more robust the prediction and thus, a more informed decision with a higher degree of accuracy. For example, let’s say we have 25 trees in our forest, and those trees have been trained to distinguish and classify images of cats and dogs. Given the image of a cat or dog, each tree will make a decision, and classify the image as either a cat or a dog. All the decisions combined will result in a statistically accurate classification. If only 20 of the 25 decision trees result in a classifying vote of “cat,” and it is indeed a cat’s image, then our algorithm is 80% accurate.

The “random” in “Random Forests” comes from the fact that the algorithm trains each individual decision tree with different subsets of the training data. Each node of every decision tree is split using a randomly selected attribute of the data. By introducing this element of randomness, the algorithm can create models that are not correlated with each other. This results in dispersing possible errors throughout the model evenly. This means that the potential for errors will eventually be canceled out through the majority voting decision strategy of the Random Forests algorithm.

## 2. How does the Random Forests algorithm work?
Let’s talk about the algorithm now. These are steps that happen when training a single decision tree. For each tree in the forest:

1. Create a subset of the given training data set.
2. Use this subset to train the decision tree.
3. At each node of the decision tree, randomly select n-many features. Then compute the information gain only upon that subset.
4. Repeat until each tree is complete.

We build our “forest” by repeating each of these steps for every “tree”.

Once the forest is built:

1. Test the forest on a pertaining data set.
2. Collect the decisions made by all of the trees in the forest.
3. Consider the category (or class) with the highest votes as your output.

![Random Forests Simplified](https://cdn-images-1.medium.com/max/800/1*i0o8mjFfCn-uD79-F1Cqkw.png)
##### image attributed to: https://medium.com/@williamkoehrsen/random-forest-simple-explanation-377895a60d2d

## 3. A programming example of Random Forests.

```py
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
```

_**The above code is an implementation of Random Forests algorithm for an email spam classification.**_

The objective here is to illustrate an example of how to use the Random Forests algorithm. We do not have to write or implement the algorithm from scratch. I have imported the algorithm which is already implemented and available at: http://scikit-learn.org. SciKit-Learn is an organization for the implementation of all machine learning algorithms.

The second line of the code is where the RandomForestClassifier algorithm gets imported. Line numbers eight and fifteen are where it is used. The RandomForestClassifier has two parameters specified. The first is criterion: which names a method to calculate the information gain. The second is the estimators: the number of trees in the forest. Different data sets need different numbers of trees. The best way to find an optimal number of estimators is by trial and error. This model was trained on 1200 data points. The objective was to classify between spam and non-spam email. The number of trees I chose here was 41. This amount of trees gave me maximum (97%) accuracy and efficiency. If the estimator is too large, it will take too long to process - possibly even forever.


## 4. Advantages of a Random Forests algorithm.

- Can be used for both classification and regression.
- Deals with the overfitting problem and is therefore more accurate.
- Does not have to normalize the data.
- Trees can be trained in parallel and are thus, time saving.
- Requires few parameters to deal with while implementing.
