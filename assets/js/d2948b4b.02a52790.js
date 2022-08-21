"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7672],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7439:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={},o="Tune - PyTorch",s={unversionedId:"Examples/Tune-PyTorch",id:"Examples/Tune-PyTorch",isDocsHomePage:!1,title:"Tune - PyTorch",description:"This example uses flaml to tune a pytorch model on CIFAR10.",source:"@site/docs/Examples/Tune-PyTorch.md",sourceDirName:"Examples",slug:"/Examples/Tune-PyTorch",permalink:"/FLAML/docs/Examples/Tune-PyTorch",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/Examples/Tune-PyTorch.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Tune - HuggingFace",permalink:"/FLAML/docs/Examples/Tune-HuggingFace"},next:{title:"Contributing",permalink:"/FLAML/docs/Contribute"}},l=[{value:"Prepare for tuning",id:"prepare-for-tuning",children:[{value:"Requirements",id:"requirements",children:[],level:3},{value:"Network Specification",id:"network-specification",children:[],level:3},{value:"Data",id:"data",children:[],level:3},{value:"Training",id:"training",children:[],level:3},{value:"Test Accuracy",id:"test-accuracy",children:[],level:3}],level:2},{value:"Hyperparameter Optimization",id:"hyperparameter-optimization",children:[{value:"Search space",id:"search-space",children:[],level:3},{value:"Budget and resource constraints",id:"budget-and-resource-constraints",children:[],level:3},{value:"Launch the tuning",id:"launch-the-tuning",children:[],level:3},{value:"Check the result",id:"check-the-result",children:[],level:3},{value:"Sample of output",id:"sample-of-output",children:[],level:3}],level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tune---pytorch"},"Tune - PyTorch"),(0,r.kt)("p",null,"This example uses flaml to tune a pytorch model on CIFAR10."),(0,r.kt)("h2",{id:"prepare-for-tuning"},"Prepare for tuning"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pip install torchvision "flaml[blendsearch,ray]"\n')),(0,r.kt)("p",null,"Before we are ready for tuning, we first need to define the neural network that we would like to tune."),(0,r.kt)("h3",{id:"network-specification"},"Network Specification"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import torch\nimport torch.nn as nn\nimport torch.nn.functional as F\nimport torch.optim as optim\nfrom torch.utils.data import random_split\nimport torchvision\nimport torchvision.transforms as transforms\n\n\nclass Net(nn.Module):\n\n    def __init__(self, l1=120, l2=84):\n        super(Net, self).__init__()\n        self.conv1 = nn.Conv2d(3, 6, 5)\n        self.pool = nn.MaxPool2d(2, 2)\n        self.conv2 = nn.Conv2d(6, 16, 5)\n        self.fc1 = nn.Linear(16 * 5 * 5, l1)\n        self.fc2 = nn.Linear(l1, l2)\n        self.fc3 = nn.Linear(l2, 10)\n\n    def forward(self, x):\n        x = self.pool(F.relu(self.conv1(x)))\n        x = self.pool(F.relu(self.conv2(x)))\n        x = x.view(-1, 16 * 5 * 5)\n        x = F.relu(self.fc1(x))\n        x = F.relu(self.fc2(x))\n        x = self.fc3(x)\n        return x\n")),(0,r.kt)("h3",{id:"data"},"Data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def load_data(data_dir="data"):\n    transform = transforms.Compose([\n        transforms.ToTensor(),\n        transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))\n    ])\n\n    trainset = torchvision.datasets.CIFAR10(\n        root=data_dir, train=True, download=True, transform=transform)\n\n    testset = torchvision.datasets.CIFAR10(\n        root=data_dir, train=False, download=True, transform=transform)\n\n    return trainset, testset\n')),(0,r.kt)("h3",{id:"training"},"Training"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from ray import tune\n\ndef train_cifar(config, checkpoint_dir=None, data_dir=None):\n    if "l1" not in config:\n        logger.warning(config)\n    net = Net(2**config["l1"], 2**config["l2"])\n\n    device = "cpu"\n    if torch.cuda.is_available():\n        device = "cuda:0"\n        if torch.cuda.device_count() > 1:\n            net = nn.DataParallel(net)\n    net.to(device)\n\n    criterion = nn.CrossEntropyLoss()\n    optimizer = optim.SGD(net.parameters(), lr=config["lr"], momentum=0.9)\n\n    # The `checkpoint_dir` parameter gets passed by Ray Tune when a checkpoint\n    # should be restored.\n    if checkpoint_dir:\n        checkpoint = os.path.join(checkpoint_dir, "checkpoint")\n        model_state, optimizer_state = torch.load(checkpoint)\n        net.load_state_dict(model_state)\n        optimizer.load_state_dict(optimizer_state)\n\n    trainset, testset = load_data(data_dir)\n\n    test_abs = int(len(trainset) * 0.8)\n    train_subset, val_subset = random_split(\n        trainset, [test_abs, len(trainset) - test_abs])\n\n    trainloader = torch.utils.data.DataLoader(\n        train_subset,\n        batch_size=int(2**config["batch_size"]),\n        shuffle=True,\n        num_workers=4)\n    valloader = torch.utils.data.DataLoader(\n        val_subset,\n        batch_size=int(2**config["batch_size"]),\n        shuffle=True,\n        num_workers=4)\n\n    for epoch in range(int(round(config["num_epochs"]))):  # loop over the dataset multiple times\n        running_loss = 0.0\n        epoch_steps = 0\n        for i, data in enumerate(trainloader, 0):\n            # get the inputs; data is a list of [inputs, labels]\n            inputs, labels = data\n            inputs, labels = inputs.to(device), labels.to(device)\n\n            # zero the parameter gradients\n            optimizer.zero_grad()\n\n            # forward + backward + optimize\n            outputs = net(inputs)\n            loss = criterion(outputs, labels)\n            loss.backward()\n            optimizer.step()\n\n            # print statistics\n            running_loss += loss.item()\n            epoch_steps += 1\n            if i % 2000 == 1999:  # print every 2000 mini-batches\n                print("[%d, %5d] loss: %.3f" % (epoch + 1, i + 1,\n                                                running_loss / epoch_steps))\n                running_loss = 0.0\n\n        # Validation loss\n        val_loss = 0.0\n        val_steps = 0\n        total = 0\n        correct = 0\n        for i, data in enumerate(valloader, 0):\n            with torch.no_grad():\n                inputs, labels = data\n                inputs, labels = inputs.to(device), labels.to(device)\n\n                outputs = net(inputs)\n                _, predicted = torch.max(outputs.data, 1)\n                total += labels.size(0)\n                correct += (predicted == labels).sum().item()\n\n                loss = criterion(outputs, labels)\n                val_loss += loss.cpu().numpy()\n                val_steps += 1\n\n        # Here we save a checkpoint. It is automatically registered with\n        # Ray Tune and will potentially be passed as the `checkpoint_dir`\n        # parameter in future iterations.\n        with tune.checkpoint_dir(step=epoch) as checkpoint_dir:\n            path = os.path.join(checkpoint_dir, "checkpoint")\n            torch.save(\n                (net.state_dict(), optimizer.state_dict()), path)\n\n        tune.report(loss=(val_loss / val_steps), accuracy=correct / total)\n    print("Finished Training")\n')),(0,r.kt)("h3",{id:"test-accuracy"},"Test Accuracy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def _test_accuracy(net, device="cpu"):\n    trainset, testset = load_data()\n\n    testloader = torch.utils.data.DataLoader(\n        testset, batch_size=4, shuffle=False, num_workers=2)\n\n    correct = 0\n    total = 0\n    with torch.no_grad():\n        for data in testloader:\n            images, labels = data\n            images, labels = images.to(device), labels.to(device)\n            outputs = net(images)\n            _, predicted = torch.max(outputs.data, 1)\n            total += labels.size(0)\n            correct += (predicted == labels).sum().item()\n\n    return correct / total\n')),(0,r.kt)("h2",{id:"hyperparameter-optimization"},"Hyperparameter Optimization"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import numpy as np\nimport flaml\nimport os\n\ndata_dir = os.path.abspath("data")\nload_data(data_dir)  # Download data for all trials before starting the run\n')),(0,r.kt)("h3",{id:"search-space"},"Search space"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'max_num_epoch = 100\nconfig = {\n    "l1": tune.randint(2, 9),   # log transformed with base 2\n    "l2": tune.randint(2, 9),   # log transformed with base 2\n    "lr": tune.loguniform(1e-4, 1e-1),\n    "num_epochs": tune.loguniform(1, max_num_epoch),\n    "batch_size": tune.randint(1, 5)    # log transformed with base 2\n}\n')),(0,r.kt)("h3",{id:"budget-and-resource-constraints"},"Budget and resource constraints"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"time_budget_s = 600     # time budget in seconds\ngpus_per_trial = 0.5    # number of gpus for each trial; 0.5 means two training jobs can share one gpu\nnum_samples = 500       # maximal number of trials\nnp.random.seed(7654321)\n")),(0,r.kt)("h3",{id:"launch-the-tuning"},"Launch the tuning"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import time\nstart_time = time.time()\nresult = flaml.tune.run(\n    tune.with_parameters(train_cifar, data_dir=data_dir),\n    config=config,\n    metric="loss",\n    mode="min",\n    low_cost_partial_config={"num_epochs": 1},\n    max_resource=max_num_epoch,\n    min_resource=1,\n    scheduler="asha",  # Use asha scheduler to perform early stopping based on intermediate results reported\n    resources_per_trial={"cpu": 1, "gpu": gpus_per_trial},\n    local_dir=\'logs/\',\n    num_samples=num_samples,\n    time_budget_s=time_budget_s,\n    use_ray=True)\n')),(0,r.kt)("h3",{id:"check-the-result"},"Check the result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'print(f"#trials={len(result.trials)}")\nprint(f"time={time.time()-start_time}")\nbest_trial = result.get_best_trial("loss", "min", "all")\nprint("Best trial config: {}".format(best_trial.config))\nprint("Best trial final validation loss: {}".format(\n    best_trial.metric_analysis["loss"]["min"]))\nprint("Best trial final validation accuracy: {}".format(\n    best_trial.metric_analysis["accuracy"]["max"]))\n\nbest_trained_model = Net(2**best_trial.config["l1"],\n                         2**best_trial.config["l2"])\ndevice = "cpu"\nif torch.cuda.is_available():\n    device = "cuda:0"\n    if gpus_per_trial > 1:\n        best_trained_model = nn.DataParallel(best_trained_model)\nbest_trained_model.to(device)\n\ncheckpoint_path = os.path.join(best_trial.checkpoint.value, "checkpoint")\n\nmodel_state, optimizer_state = torch.load(checkpoint_path)\nbest_trained_model.load_state_dict(model_state)\n\ntest_acc = _test_accuracy(best_trained_model, device)\nprint("Best trial test set accuracy: {}".format(test_acc))\n')),(0,r.kt)("h3",{id:"sample-of-output"},"Sample of output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#trials=44\ntime=1193.913584947586\nBest trial config: {'l1': 8, 'l2': 8, 'lr': 0.0008818671030627281, 'num_epochs': 55.9513429004283, 'batch_size': 3}\nBest trial final validation loss: 1.0694482081472874\nBest trial final validation accuracy: 0.6389\nFiles already downloaded and verified\nFiles already downloaded and verified\nBest trial test set accuracy: 0.6294\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/FLAML/blob/main/notebook/tune_pytorch.ipynb"},"Link to notebook")," | ",(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/microsoft/FLAML/blob/main/notebook/tune_pytorch.ipynb"},"Open in colab")))}p.isMDXComponent=!0}}]);