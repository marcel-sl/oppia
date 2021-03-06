// Copyright 2017 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Factory for creating new frontend instances of answer
 *     Classification Result domain objects.
 */

oppia.factory('AnswerClassificationResultObjectFactory', [function() {
  var AnswerClassificationResult = function(
      outcome, answerGroupIndex, ruleIndex, classificationCategorization) {
    this.outcome = outcome;
    this.answerGroupIndex = answerGroupIndex;
    this.ruleIndex = ruleIndex;
    this.classificationCategorization = classificationCategorization;
  };

  // TODO (ankita240796) Remove the bracket notation once Angular2 gets in.
  /* eslint-disable dot-notation */
  AnswerClassificationResult['createNew'] = function(
  /* eslint-enable dot-notation */
      outcome, answerGroupIndex, ruleIndex, classificationCategorization) {
    return new AnswerClassificationResult(
      outcome, answerGroupIndex, ruleIndex, classificationCategorization);
  };
  return AnswerClassificationResult;
}]);
