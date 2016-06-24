module.exports = {
    env: 'production',
    addonBucketName: 'addons.ember-twiddle.com',
    schedulerSqsQueueUrl: 'https://sqs.us-east-1.amazonaws.com/620471542343/addon-builds-production',
    schedulerLambdaFunctionname: 'addon-build-scheduler-production',
    schedulerRole: 'arn:aws:lambda:us-east-1:620471542343:function:addon-build-scheduler-production',
    builderRole: 'arn:aws:iam::620471542343:role/addon-builder-role-production',
    builderClusterName: 'ember-twiddle',
    builderTaskDefinition: 'addon-builder-production'
};